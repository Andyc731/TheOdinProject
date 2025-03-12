function mergeSort(array) {
    
    console.log(array);
    if (array.length === 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);

    const firstHalf = mergeSort(array.slice(0, mid))
    const secondHalf = mergeSort(array.slice(mid));

    return merge(firstHalf, secondHalf);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 111, 122]));

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
  }

// console.log(sort([1, 2, 3], [0, 5, 8, 13]));