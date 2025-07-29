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
    pad(string, lenght) {

        /*
        idea 
            .padddingstart(start)
            .paddingend()

        */

    }, 
}; 


//let clampValue = _.clamp(1,5,-10);
//console.log(clampValue); 

//let inRangeValue = _.inRange(3,2); 
//console.log(inRangeValue); 

//let arrayOfWords = _.words('La cucuaracha ya no puede caminar'); 
//console.log(arrayOfWords);




// Do not write or modify code below this line.
module.exports = _;