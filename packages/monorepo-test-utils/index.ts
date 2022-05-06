export interface Address {
    house: string;
    street: string;
    country: string; 
}

export interface Person {
    name: string;
    age: number;
    address: Address;
}

export function prettyPrintPerson(p: Person) {
    return `Name: ${p.name} is ${p.age} year old`;
}