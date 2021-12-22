let amount = prompt('Enter amount of elements', 100);
console.log(amount);
let max = 10;
let x = [];
for(let i = 0;i < amount; i++){
    x[i] = Math.floor(Math.random() * max);
}
console.log(x);
    
let MAX = -1;
let MIN = 11;
let index1;
let index2;
for(let i = 0; i < x.length; i++){
    if(x[i] % 2 == 0){
        if(x[i] > MAX){
            MAX = x[i];
            index1 = i;
        }
    }
}
console.log(MAX, index1);
for(let i = 0; i < x.length; i+=2){
    if(x[i] <    MIN){
        MIN = x[i];
        index2 = i;
    }
}
console.log(MIN, index2);
let temp;
temp = x[index1];
x[index1] = x[index2];
x[index2] = temp;
console.log(x)
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
console.log(insertionSort(x))