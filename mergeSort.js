const test = [ 9, 8, 4, 7, 5, 6, 1, 3, 2, 10];
console.log('before',test)
function mergeSort(arr) {

    if(arr.length < 2) {
        return arr;
      }

    const len = arr.length;
    const mid = Math.floor(len/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft,sortedRight)
};

function stitch(left, right) {
    let result = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return result.concat(left, right)
}

console.log('after',mergeSort(test))