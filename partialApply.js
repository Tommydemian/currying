function greet(greeting, name) {
    return `${greeting} ${name}`;
}

const helloDan = greet("hello", "Dan");
console.log(helloDan);

function curryGreet(greeting) {
    return function personName(name) {
        return `${greeting} ${name}`; 
    };
} 

const greetingPerson = curryGreet("Aloha");
const helloLucas = greetingPerson("Lucas");

console.log(helloLucas);