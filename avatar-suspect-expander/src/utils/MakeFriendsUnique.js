const MakeFriendsUnique = (arr) => {
    let hashMap = new Map();
    let uniqueArr = []
    arr.forEach((e) => {
        if (hashMap.has(e.id) === false) {
            hashMap.set(e.id, true);
            uniqueArr.push(e);
        }
    })
    return uniqueArr;
}

export default MakeFriendsUnique;