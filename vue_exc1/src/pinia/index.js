import { defineStore } from "pinia"

export const useDataStore = defineStore('dataStore',{
    state: () => ({
        uploadedImg:[],
    }),
    actions:{
        setImages(images){
            this.uploadedImg.push(images)
        },
        deleteImages(id){
            const index = this.uploadedImg.findIndex( t => t.id === id)
            if(index != -1){
                this.uploadedImg.splice(index,1)
            }
        }
    }
})