export { }
namespace UserChild {
    export class Parent {
        name = '';
        setName(name) {
            this.name = name;
        }
    }
}
namespace Users {
    export class Child extends UserChild.Parent {
        getName() {
            console.log(this.name);
        }
    }
}

let a = new Users.Child();
a.setName('Prodip');
a.getName();