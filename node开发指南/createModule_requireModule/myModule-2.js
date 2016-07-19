//PersonModule

function Person(){
    this.setName = function(inputName){
        this.name = inputName;
    };
    this.sayHello = function(){
        console.log("hello " + this.name)
    }
}

module.exports = Person;
