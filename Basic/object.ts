export { }
interface myObjType {
    name: string,
    age: number,
    email: string,
    isMarried: boolean
}

let myObj: myObjType = {
    name: 'Prodip',
    age: 25,
    email: 'prodip@gmail.com',
    isMarried: false
};

// myObj.isMarried = 12;
console.warn(myObj);