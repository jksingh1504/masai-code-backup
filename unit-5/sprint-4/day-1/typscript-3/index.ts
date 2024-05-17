interface User {
	type: "user";
	name: string;
	age: number;
	occupation: string;
}

interface Admin {
	type: "admin";
	name: string;
	age: number;
	role: string;
}

const getUserType=(obj:User|Admin):string=>{
	return obj.type
}


const person1:User={
	type:"user",
	name:"Masai",
	age:20,
	occupation:"skilling"
}

console.log(getUserType(person1))