const _ = {
    clamp(num,lower, upper) {
        let max = Math.max(num, lower, upper);
        let min = Math.min(num, lower, upper); 
    
        console.log(`Upper:${max} lower: ${min}`);
    },
}; 


_.clamp(10,5,20);



// Do not write or modify code below this line.
module.exports = _;