function findSumNum(array, target) {
    var indices = []
    for (let y = 0; y < array.length; y++) {
        const found = array.find(element => element + array[y] == target);
        if (array.indexOf(found) >= 0) {
            indices.push(array.indexOf(found))
        }
    }
    return indices
}


console.log(findSumNum([2, 7, 11, 15], 9))
