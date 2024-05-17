const Name: string = "Ramesh";

const Age: number = 30;

const isFetching: boolean = true;

const arr: number[] = [1, 2, 3, 4];

const str: string[] = ["ramesh", "suresh", "mukesh"];

const tuple: [string, boolean] = ["hello", false];

enum person1 {
	User = "Ramesh",
	SuperUser = "suresh",
	Admin = "mukesh",
	SuperAdmin = "kamlesh",
}

const product = (a: number, b: number): number => {
	return a * b;
};

const divide = (a:number,b:number):number=>{
    return a/b
}

const printName=(str:string):void=>{
    console.log(str)
}