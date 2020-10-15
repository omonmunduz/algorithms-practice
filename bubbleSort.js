const test = [ 9, 8, 4, 7, 5, 6, 1, 3, 2, 10];
console.log('before',test)
function bubbleSort(arr) {
    do{
        var swapped = false;
        for(let i=0;i<arr.length;i++) {
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }

    }while(swapped)
    return arr
};

console.log('after', bubbleSort(test))