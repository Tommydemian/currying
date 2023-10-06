# CURRYING
- Functions can define functions
 return the inner function and it will "remember" the scope

 ## Understanding closures in depth
 Every time a function is invoked it creates a brand new **exectuion context** with it's own **local memory**(temporary)/ `variable environment`.
  Once the function is finished the vals allocated in memory will be deleted `except for its returned value`

  - *What if we could have a permanent memory attached to it?* /*let the function have some remembrance of it's previous execution*

  ### It all starts returning a function from the definition of another function 

  ```javascript
  function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2;
  }
  const generatedFunc = createFunction();
  const result = generatedFunc(6); // 12
  ```
  **Lets be precised on the flow of the function and memory**

1. We invoke the createFunction, which creates an execution context.
2. Inside this execution context, we define a function multiplyBy2 and return a reference to it.
3. The constant generatedFunc in the global memory is assigned the returned function reference (i.e., multiplyBy2).
4. We then invoke generatedFunc with an argument of 6, which is effectively invoking multiplyBy2 with 6.
5. The constant result in the global memory is assigned the value 12.

### Currying
```javascript
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
```