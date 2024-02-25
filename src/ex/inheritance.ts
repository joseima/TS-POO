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

    constructor (
        public name: string,
        public owner: string,
    ) {
        super(name);
    }

    woof (times: number) {
        for (let index = 0; index < times; index++) {
            console.log('Woof!!');
        }
    }

}

const fifi = new  Animal('fifi');
fifi.move();

const cheis = new Dog ('cheis', 'Owner');
cheis.move(); 
cheis.woof(6);