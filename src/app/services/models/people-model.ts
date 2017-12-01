export interface PeopleModel {
    name: string;
    gender: string;
    age: number;
    pets: Array<{ name: string, type: string }>;
}
