// Private Fields (#) — Hidden Data
// PUBIC Fields 

class Credentials{
    #apiKey;
    user;

    constructor(user,key){
        this.user=user;//public
        this.#apiKey=key;
    }

    //custom made functuon
    getHeader(){
        return "Bearer "+this.#apiKey;
    }
}

let cred=new Credentials("admin","secretkey123");
console.log(cred.user);
console.log(cred.apiKey);//undefined
// console.log(cred.#apiKey);//Private field '#apiKey' must be declared in an enclosing class

console.log(cred.getHeader()) //Bearer secretkey123


// cred.apiKey is undefined
// (it doesn't exist). 
// cred.#apiKey would throw a SyntaxError. 
// The ONLY way to access it is through the public method getAuthHeader()