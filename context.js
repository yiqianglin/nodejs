var pet = {
    word: 'pet',
    speak: function(){
        console.log(this.word);
        console.log(this===pet);
    }
}
pet.speak();       //pet  //true


function Pet(words){
    this.words=words;
    console.log(this.words);
    console.log(this===global)
};
Pet('sss')  //sss  //true
console.log(words)  //sss


function Pet(words){
    this.words=words;
    this.speak=function(){
        console.log(this.words);
        console.log(this)
    }
}
var cat =new Pet('Miao');
cat.speak();    //Miao   //Pet
console.log(words)   //sss   因为前面Pet('sss')的this是window，而new Pet()的this是pet
