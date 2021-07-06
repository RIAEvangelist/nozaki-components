import VanillaTest from 'vanilla-test';
const test=new VanillaTest;

const cleanup=function(){
    test.pass();
    test.done();
}

const fail=function(err){
    console.trace(err)
    test.fail();
}


//basic test template

try{
    console.log('will probably write tests with puppeteer');    
}catch(err){
    fail(err);
}
cleanup();

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