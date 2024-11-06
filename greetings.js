let i = 0; 
  do{ newStudent = prompt('Введите имя нового студента!');
    i += 1
  } while (i < 3 & newStudent);
 
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  
