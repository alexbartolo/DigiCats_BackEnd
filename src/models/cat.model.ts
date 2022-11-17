export enum Gender{

    Male="M",
    Female="F"
}

export enum Species{


}

export interface Cat {

    _id: string;
    name: string;
    age: number;
    gender: Gender;
    species: Species;
    dateJoined: number;
}

