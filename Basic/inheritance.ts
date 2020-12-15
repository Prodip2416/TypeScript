class Parent {
    name = '';
    setName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    getName() {
        console.log(this.name);
    }
}

let a = new Child()
a.setName('Prodip');
a.getName();