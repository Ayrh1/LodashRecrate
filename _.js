const _ = {
    clamp(num,lower, upper) {
        console.log(`before change lower: ${lower} upper: ${upper}`);
        if(lower > upper){
            /*
            let placeholder = lower;
            lower = upper;
            upper = placeholder;
            */
           //shortcut
           [lower, upper] = [upper, lower]; 
            console.log(`lower:${lower} upper:${upper}`);
        }
        let result = Math.max(num, lower);
        let finalValue = Math.min(result, upper);
        return finalValue
    },
    inRange(num, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            [start, end] = [end, start];
        }
        if (num >= start && num < end){
            return true; 
        } else {
            return false;
        }
    },
    words(string) {
        let wordArray = string.split(" ");
        return wordArray;

    },
    pad(string, length) {
        let stringLength = length - string.length; 
        let left = Math.floor(stringLength / 2 );
        let right = stringLength - left; 

        let rightPad = string.padStart(string.length+left);
       console.log(rightPad.length);
       let finalPad = rightPad.padEnd(rightPad.length + right)
       console.log(finalPad, finalPad.length)
        return finalPad

    }, 
    has(object, value) {
        
        if(object.hasOwnProperty(value) === false) {
            return false;
        }

        if(object[value] === null || object[value] === undefined){
            return false; 
        }

        return true; 
    },
    invert(objct) {
        let newObject = {}; 

        let keyArray = Object.keys(objct);
        let valueArray = Object.values(objct);

        for(let i = 0; i < keyArray.length; i++){

            //[valueArray[i] -> brackets help access the value inside the array]
            newObject[valueArray[i]] = keyArray[i]; 
            
        }

        return newObject; 
    }, 
    findKey(obj, predicate) {
        for (let key in obj) {
            const value = obj[key];
            if (predicate(value)) {
            return key;
            }
        }
        return undefined;
    }, 
    drop(arry, num) {     
        if(num === undefined){
            num = 1;
        }  
        return arry.slice(num)
    },
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((element, index) => {return !predicate(element, index, array)});
        let droppedArray = this.drop(array, dropNumber);
        
        return droppedArray;
    },
    chunk(array, num) {
        if(num === undefined) {
            num = 1; 
        }
        let newArrays = []; 

        for(let i = 0; i < array.length; i += num) {
            let newArray = array.slice(i, i+ num); 
            newArrays.push(newArray); 
        }
        return newArrays; 

    },
}; 



/*
const objectTest = {
    a: 'abc',
    b: 45,
    c: false,
};

let newObject = _.invert(objectTest); 
console.log(newObject); 
*/

/*
let testObject = _.has(objectTest, 'a');
console.log(testObject);
*/

//let clampValue = _.clamp(1,5,-10);
//console.log(clampValue); 

//let inRangeValue = _.inRange(3,2); 
//console.log(inRangeValue); 

//let arrayOfWords = _.words('La cucuaracha ya no puede caminar'); 
//console.log(arrayOfWords);

//let paddedString = _.pad('hello', 10);
//console.log(paddedString); 


// Do not write or modify code below this line.
module.exports = _;