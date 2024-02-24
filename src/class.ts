const date = new Date(2024, 1, 12);  //js class Date

export class MyDate {
    year: number;
    month: number;
    day: number = 0; //typescript ask to initilize if we dont have constructor
    
    constructor(year: number, month: number, day: number ) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(2024, 3, 21);