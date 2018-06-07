const host = 'localhost',
      user = 'root',
      password = '',
      dbname = 'e-learning';
      
const passSecret = '1@3$5^7*9';     


 class config {
    static get host() {
        return host;
    }

    static get user() {
        return user;
    }

    static get password() {
        return password;
    }

    static get dbname() {
        return dbname;
    }   

    static get apiURL(){
        return apiURL;
    }
    static get secretKey(){
        return passSecret;
    }
}

module.exports = config;