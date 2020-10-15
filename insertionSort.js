const test = [ 9, 8, 4, 7, 5, 6, 1, 3, 2, 10];
console.log('before', test)

const insertionSort = (arr) => {
    for (let i=1; i<arr.length; i++) {
        for(let j=1;j<i.length;j++) {
            if(arr[i] > arr[j]){
                const spliced = arr.splice(i, 1);
                arr.splice(j, 0, spliced)
            }
        }
    }
}

console.log('after', insertionSort(test))