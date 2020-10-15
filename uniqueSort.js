const test = [1,5,2,1,5,5,2,2];

console.log('before',test)

function uniqueSort(input) {
    const lookup = {};
    let result = [];

    for(let i=0;i<input.length;i++){
        if(lookup[input[i]]){
            continue;
        }else{
            lookup[input[i]] = true;
            result.push(input[i])
        }
    }
    return result
}

console.log('after', uniqueSort(test))

