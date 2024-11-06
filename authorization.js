let existingUserLogin = 'the_best_user';
let existingUserPassword = '12345678';
let userLogin = prompt('Введите логин');
let userLoginTrim = userLogin.trim();
let userPassword = prompt('Введите пароль');
let userPasswordTrim = userPassword.trim();
if (existingUserLogin===userLoginTrim, existingUserPassword===userPasswordTrim) {
    alert(`Добро пожаловать, ${userLoginTrim} `);
  } else {
    alert('Логин и (или) Пароль введены неверно!');	
  }