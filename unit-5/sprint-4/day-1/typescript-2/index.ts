interface Todo{
    title:string;
    statur:boolean;
    id:number
}


interface Name{
    firstname:string;
    lastname:string;
}


const getName=(x:Name):string=>{
    return x.firstname+" "+x.lastname
}


interface Address{
    houseNumber:number;
    stree:number;
    city:string;
    state:string;
    postalCode:number;
    country:string;
}


interface PersonalDetails{
    Prefix?:string;
    phones:number[];
    Address:string[];
    email?:string;
    firstname:string;
    lastname:string;
    middlename?:string
}

const arr:PersonalDetails[]=[]


const PhoneBook=(x:PersonalDetails)=>{
    arr.push(x)
}

let x:PersonalDetails={
    Prefix:"Mr",
    phones:[1,2,3,4,5],
    Address:["hello ","there"],
    email:"xyz.@gmail.com",
    firstname:"Ramesh",
    lastname:"sahu",
}

PhoneBook(x)
console.log(arr)
