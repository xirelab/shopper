import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
            { id: 11, name: 'iPhone 12 Mini', price: 2000 },
            { id: 12, name: 'One plus 9', price: 1000 },
            { id: 13, name: 'Samsung galaxy S21', price: 1500 },
            { id: 14, name: 'Oppo A9', price: 500 },
        ];
        return {products};
    }    
}