import {Basepage} from "./Basepage.js";

export class LoginPage extends Basepage{
    constructor(){
                super("Login Page");

    }

    login(user) {
        console.log(user + " logged in");
    }
}