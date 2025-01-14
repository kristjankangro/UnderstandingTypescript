const btn = document.querySelector("button")!;

const add = (n1: number, n2: number): number => n1 + n2;

btn.addEventListener("click", evt => {
    console.log(evt)
})

const hobbies = ["sports", "bjj"];
const active =["book","chess"]

active.push(...hobbies);

const person = {
    firstName: "Tom",
    age: 34
};

const detailed ={
    ...person,
    hobbies: hobbies
}

//rest params

const add2 = (n1: number, ...numbers: number[]) => {
    return numbers.reduce((prev, sum) => prev + sum, n1);
}

console.log(add2(1,2,3,4,15));

//array and object destructuring

// const h1 = hobbies[0];

const [h1, h2] = hobbies;

const { firstName: user } = detailed;

console.log(user)