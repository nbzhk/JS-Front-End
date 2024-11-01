function printElement(arr, num) {

    const result = [];

    arr.forEach((element, index) => {
        
        if (index % num === 0) {
            result.push(element);
        }
    });

    return result;
}