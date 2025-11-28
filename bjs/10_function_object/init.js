
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;   
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    
    document.getElementById('avatarImage').src = initPerson.picture;

};


function cleanPerson() {
    document.getElementById('firstNameOutput').innerText = 'Имя:-';
    document.getElementById('patronymicOutput').innerText = 'Отчество:-';  
    document.getElementById('genderOutput').innerText = 'Пол:-';
    document.getElementById('surnameOutput').innerText = 'Фамилия:-';
    document.getElementById('birthDateOutput').innerText = 'Дата рождения:-';
    document.getElementById('professionOutput').innerText = 'Профессия:-';
    document.getElementById('avatarImage').src = 'Фото';
}


  document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('btnGeneration').addEventListener('click', window.onload);
            document.getElementById('btnCleen').addEventListener('click', cleanPerson);
            

  
     
        });


