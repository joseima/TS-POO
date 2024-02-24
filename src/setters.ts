export class MyDate {

     constructor(
        public year: number, //you must add the acces so that the TS automtization can work 
        private _month: number = 0,
        private _day: number = 0 
        ) {}
 
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
             this._day += amount
         } 
         if (type === 'months')  {
             this._month += amount
         } 
         if (type === 'years')  {
             this.year += amount
         } 
     }
 
     get day (){
        //code
         return this._day;
     }

    get isLeapYear(): boolean {
        if  (this.year % 400 === 0) return true;
        if  (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
     }

     get month() {
        return this._month;
     }
     
     set month(newValue : number) {
        if (newValue >= 1 && newValue <= 12) {
         this._month = newValue;
        } else {
            throw new Error('month out of range')
        }
     }
 
 }
 
 const myDate = new MyDate(2024, 3, 21);
 console.log(myDate.isLeapYear);