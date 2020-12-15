export {}
// class App{
//     name = 'Prodip';
//     getName(){
//         return this.name;
//     }
// }

// class App{
//     name = '';
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
// }

class App{
    name = '';
    constructor(name){
        this.name = name;
    }
    getName():void
    {
        console.log(this.name);
    }
}

let a = new App('Prodip Sarker');
 a.getName();