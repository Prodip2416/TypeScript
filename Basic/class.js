"use strict";
exports.__esModule = true;
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
var App = /** @class */ (function () {
    function App(name) {
        this.name = '';
        this.name = name;
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a = new App('Prodip Sarker');
a.getName();
