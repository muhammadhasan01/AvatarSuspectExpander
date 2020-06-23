const ValidateData = (id, arr) => {
    let hashMap = new Map();
    hashMap.set(id, true);
    let validArr = [];
    arr.forEach((e) => {
        if (hashMap.has(e.id) === false) {
            hashMap.set(e.id, true);
            validArr.push(e);
        }
    })
    return validArr;
}

export default ValidateData;