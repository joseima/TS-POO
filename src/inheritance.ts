export class Animal  {
    constructor(
        public name:  string
    ){}

    move() {
        console.log('moving along');
    }

    greeting() {
        return `Hello, I', ${this.name}`;
    }
}
export class Dog extends Animal {
    woof (times: number) {
        for (let index = 0; index < times; index++) {
            console.log('Woof!!');
        }
    }

}

const fifi = new  Animal('fifi');
fifi.move();

const cheis = new Dog ('cheis');
cheis.move();

cheis.woof(6);