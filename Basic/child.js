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
