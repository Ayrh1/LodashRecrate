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
}; 


//let clampValue = _.clamp(1,5,-10);
//console.log(clampValue); 

//let inRangeValue = _.inRange(3,2); 
//console.log(inRangeValue); 

//let arrayOfWords = _.words('La cucuaracha ya no puede caminar'); 
//console.log(arrayOfWords);

let paddedString = _.pad('hello', 10);
console.log(paddedString); 


// Do not write or modify code below this line.
module.exports = _;