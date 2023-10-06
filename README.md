# CURRYING
- Functions can define functions
 return the inner function and it will "remember" the scope

 ## Understanding closures in depth
 Every time a function is invoked it creates a brand new **exectuion context** with it's own **local memory**(temporary)/ `variable environment`.
  Once the function is finished the vals allocated in memory will be deleted `except for its returned value`

  - *What if we could have a permanent memory attached to it?* /*let the function have some remembrance of it's previous execution*

  ### It all starts returning a function from the definition of another function 