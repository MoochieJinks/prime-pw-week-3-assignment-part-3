console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.

// I could not get this one for the life of me

// console.log('4. Removed item:');
//  for (let i = 0; i < supplyChanges.length; i++){
//      if (supplyChanges[1] === 5){
//          supplyChanges.splice(i, 1);
//          i--;
//      }
// }
//  console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
let moreSupply = supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (let i=0; i < supplyChanges.length; i++){
    const order = supplyChanges[i];
    if (order > 0){
        console.log('Added ', order, 'parts.');
    }
    else if (order === 0){
        console.log('No change');
     }
    else if (order < 0){
         console.log('Removed', order, 'parts.');
     }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (const order of supplyChanges){
    if (order > 0){
        console.log('Added ', order, 'parts.');
    }
    else if (order === 0){
        console.log('No change');
     }
    else if (order < 0){
         console.log('Removed', order, 'parts.');
     }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
for ( i=0; i<supplyChanges.length; i++){
    //const totalParts = supplyChanges[i] + supplyChanges[i++];
    const totalParts = supplyChanges[i] + supplyChanges[supplyChanges.length - 1];
    console.log(totalParts);
}

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let totalParts = 57;
let boxes = 0;
let boxedParts = 7
let addedParts = 0 
// while (totalParts>boxedParts){
//     console.log(boxedParts);
//     totalParts - 7;
    // let filledBoxes = boxes++;
    // //let addedParts = partsInBox++;
    // let packagedParts = 7;
    // if (packagedParts < totalParts){
    //     filledBoxes++;
    //     packagedParts + 7;
    //     console.log('Thats', filledBoxes, 'boxes with', packagedParts, 'parts.' );
    // }
   // console.log('Thats')
// }


//I need to first make a variable equal to the number of 



