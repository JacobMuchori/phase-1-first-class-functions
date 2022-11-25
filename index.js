function receivesAFunction(spy, another) {
    return(spy() + "" + another);
}


function greetings() {
    let name= 'Jacob';
   return`Hello ${name}`;
}
console.log(greetings());

function returnsANamedFunction() {
   return greetings;
}
console.log(returnsANamedFunction());

var fn= returnsANamedFunction();

function returnsAnAnonymousFunction () {
    return (function (){
        return'It is nine in the morning'
    })
}
console.log(returnsAnAnonymousFunction());

var fn= returnsAnAnonymousFunction();

