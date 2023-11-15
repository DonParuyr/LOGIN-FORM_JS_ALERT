// форма авторизации через alert

let users = [];

let loginUser;
let passUser;


function validReg(log, psw) {
    if ( ((log.length > 3) && (log.length < 13)) && ((psw.length >= 3) && (psw.length <= 20)) )
    {
        return true;
    } 
}

let registration = function(){
    while(true) {
        let reglogin = prompt('Логин:');
        let regpassword = prompt("Пароль:");

        if (validReg(reglogin, regpassword)) {
            loginUser = reglogin;
            passUser = regpassword;

            alert('Вы успешно зарегистрировались');
            break;
        }else{
            alert('Логин должен содержать от 3 до 12 символов, а пароль от 3 до 20');
            break;
        }
    }
}

let login = function() {
    while(true) {
        let login = prompt('Логин:');
        let password = prompt("Пароль:");

        if ( ((login == loginUser) 
           && (password == passUser)) )
        {
            alert('Вы успешно авторизовались!');
            break;
        }
        else{
            alert('Неверный логин или пароль');
            break;
        }
    }
}

