import VanillaTest from 'vanilla-test';
const test=new VanillaTest;

const fail=function(err){
    console.trace(err)
    test.fail();
}

const basic=function(key,value){
    test.expects(`is.${key}(${value});`);
    is[key](value);
}


//basic test template

// try{
//     basic('',);    
// }catch(err){
//     fail(err);
// }
// cleanup();

//hand writtenbasic test template
//used to log out human readable test

// try{
//    test.expects(``);
//    is.();   
// }catch(err){
//     fail(err);
// }
// cleanup();



test.report();