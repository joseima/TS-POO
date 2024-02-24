export class MyDate {
   private  year: number;
    public month: number;
    public day: number = 0; //typescript ask to initilize if we dont have constructor
    
    constructor(year: number, month: number, day: number ) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${this.day}/${this.month}/${this.year}`;
    }

    private addPadding(value:number) {
        if (value < 10){
            return `0${value}`
        }
        return `${value}`
    }

    public add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days')  {
            this.day += amount
        } 
        if (type === 'months')  {
            this.month += amount
        } 
        if (type === 'years')  {
            this.year += amount
        } 
    }

    getDay (){
        return this.day;
    }

}

const myDate = new MyDate(2024, 3, 21);
console.log(myDate.printFormat());
myDate.add(3, 'days');