interface UserType {
    name: string,
    age: number,
    isMarried: boolean,
    getFullName: () => string
}

let users: UserType = {
    name: 'Prodip',
    age: 25,
    isMarried: false,
    getFullName: function () {
        return 'Prodip Sarker';
    }
}

console.log(users);