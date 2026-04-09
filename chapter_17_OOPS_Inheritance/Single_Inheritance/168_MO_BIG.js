class Testcase{
    execute(){
                console.log("Base Class:Running generic test");

    }
}

class unitTest extends Testcase{
    execute() {
        console.log("unitTest class : Running unit test — checking one function");
    }
}

class APITest extends Testcase{
     execute() {
        console.log("APITest class :Running API test — sending HTTP request");
    }
}

class E2ETest extends Testcase{
    execute() {
        console.log("E2ETest : Running E2E test — opening browser");
    }
}

let tests = [new unitTest(), new APITest(), new E2ETest()];

tests.forEach(function(test){
    test.execute()
});