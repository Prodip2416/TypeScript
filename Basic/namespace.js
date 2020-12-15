"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UserChild;
(function (UserChild) {
    var Parent = /** @class */ (function () {
        function Parent() {
            this.name = '';
        }
        Parent.prototype.setName = function (name) {
            this.name = name;
        };
        return Parent;
    }());
    UserChild.Parent = Parent;
})(UserChild || (UserChild = {}));
var Users;
(function (Users) {
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.getName = function () {
            console.log(this.name);
        };
        return Child;
    }(UserChild.Parent));
    Users.Child = Child;
})(Users || (Users = {}));
var a = new Users.Child();
a.setName('Prodip');
a.getName();
