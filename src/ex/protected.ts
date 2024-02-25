export abstract class Animal  {
    constructor(
        protected name:  string //privte permitting inheritance
    ){}

     move() {
        console.log('moving along');
    }

    protected greeting() {
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

    woof (times: number): void {
        for (let index = 0; index < times; index++) {
            console.log('Woof!!');
        }
        this.greeting(); //can access the method with inheritnce but not from outside
    }
    move () {
        console.log('move as a dog');
        super.move();
    }
}

// const fifi = new  Animal('fifi');
// fifi.move();

const cheis = new Dog ('cheis', 'Owner');
cheis.move(); 
cheis.woof(6);
cheis.move();