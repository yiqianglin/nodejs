function doSomething(args, callback){
    somethingComplicated(args);
    //callback && callback();
    process.nextTick(callback)
};

function somethingComplicated(args){
    console.time('somethingComplicated');
    for(var i=0;i<2000000000;i++){

    };
    console.timeEnd('somethingComplicated');
};
function compute(){
    console.time('compute');
    for(var i=0;i<1000000000;i++){

    };
    console.timeEnd('compute');
};

console.time('doSomething');
doSomething('henix',compute);
console.timeEnd('doSomething');