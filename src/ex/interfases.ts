interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}


// const driver: Driver = {
//     database: '',
//     password: '',
//     port: 23,
//     connect: function (): void {
//         throw new Error("Function not implemented.");
//     }
// }

class PostgesDriver implements Driver {
    constructor (
        public database: string,
        public password: string,
        public port: number,
        public hosts: string
    ) {}
    disconnect(): void {
       return //code
    }
    isConnected(name: string): boolean {
        return true; //code
    }
    connect(): void {
        return //code
    }

}
class OracleDriver implements Driver {
    constructor (
        public database: string,
        public password: string,
        public port: number, 
        public hosts: string
    ) {}
    disconnect(): void {
       //code
    }
    isConnected(name: string): boolean {
        return true; //code 
    }
    connect(): void {
       //code
    }

}