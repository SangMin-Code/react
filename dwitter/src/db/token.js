const TOKEN = 'token';

export default class tokenStorage{
    //localStorage -> 브라우저 스토리지 
    saveToken(token){
        localStorage.setItem(TOKEN,token);
    }

    getToken(){
        return localStorage.getItem(TOKEN);
    }

    clearToken(){
        localStorage.clear(TOKEN);
    }

}