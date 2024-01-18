// function calculateGroupAndAverage(arr) {
//     return arr.reduce((result, item) => {
//       // Check if the category exists in the result object, if not, initialize it.
//       result[item.category] = result[item.category] || { sum: 0, count: 0 };
  
//       // Accumulate the sum and count for the current category.
//       result[item.category].sum += item.value;
//       result[item.category].count++;
  
//       // Calculate the average for the current category.
//       result[item.category].average = result[item.category].sum / result[item.category].count;
  
//       // Return the updated result object for the next iteration.
//       return result;
//     }, {});
//   }
  
//   const arrayOfObjectsForGroupAndAverage = [
//     { category: 'A', value: 20 },
//     { category: 'B', value: 30 },
//     { category: 'A', value: 25 }
//   ];
  
//   const output = calculateGroupAndAverage(arrayOfObjectsForGroupAndAverage);
//   console.log(output);
  

function calculateAverage (arr) {
    let result = {};

     arr.forEach(item => {
        result[item.category] = result[item.category] || { sum: 0, count: 0 }; 

        result[item.category].sum+=item.value;
        result[item.category].count++;
        result[item.category].average = result[item.category].sum / result[item.category].count;   
       

    });
 return result;
          

}
    const arrayOfObjectsForGroupAndAverage = [
            { category: 'A', value: 20 },
            { category: 'B', value: 30 },
            { category: 'A', value: 25 }];
const value = calculateAverage(arrayOfObjectsForGroupAndAverage)
console.log(value)

// function calculateAverage(arr) {
//     let result = {};

//     arr.forEach(item => {
//         result[item.category] = result[item.category] || { sum: 0, count: 0 };

//         result[item.category].sum += item.value;
//         result[item.category].count++;
//         result[item.category].average = result[item.category].sum / result[item.category].count;
//     });

//     return result;
// }

// const arrayOfObjectsForGroupAndAverage = [
//     { category: 'A', value: 20 },
//     { category: 'B', value: 30 },
//     { category: 'A', value: 25 }
// ];

// const value = calculateAverage(arrayOfObjectsForGroupAndAverage);
// console.log(value);
