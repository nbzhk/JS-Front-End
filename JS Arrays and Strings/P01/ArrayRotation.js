function arrayRotation(arr, rotations) {

    const index = rotations % arr.length;

    const leftArr = arr.slice(0, index);
    const rightArr = arr.slice(index);

    const result = rightArr.concat(leftArr);

    console.log(result.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);