export class MyService {
    static instance: MyService | null = null;
   private  constructor  (public name: string) {}

    getName() {
        return this.name;
    }
    static create(name: string)  {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}


const myService1 = MyService.create('service 1');
 const myService2 = MyService.create('service 2'); //cant instance from outside the class, it will always return mySerivce1
 console.log(myService1 === myService2); //true

