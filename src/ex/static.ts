console.log(Math.PI);
console.log(Math.max(1,4,2,7,4));


class MyMath {
    static readonly PI = 3.14;
    static max (...numbers: number[]) {
        return numbers.reduce((max, item) => max <= item ? max : item );
    }
}

console.log(MyMath.PI);
const numbers = [23,64,655,7];
console.log(MyMath.max(...numbers));
