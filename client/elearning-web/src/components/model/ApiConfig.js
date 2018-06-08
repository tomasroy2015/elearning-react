const address = 'http://localhost:4000/';
//Method
const addUser = "add/user";

export default class ApiConfig {
    static get apiURL(){
        return address;
    }
    static get api(){
       return {
            url:'http://localhost:4000/',
            method:{
                addUser:"user/add",
                loginUser:'user'
            }
        }
    }
}
