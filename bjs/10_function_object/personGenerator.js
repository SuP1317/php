const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Суворов",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Зинкин",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Поцелуев",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Игиркин"
        }
     }`,


    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,


    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Марина",
            "id_3": "Клавдия",
            "id_4": "Мария",
            "id_5": "Екатерина",
            "id_6": "Елизавета",
            "id_7": "Агафья",
            "id_8": "Софья",
            "id_9": "Елена",
            "id_10": "Нина"
        }
    }`,

    

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Актриса",
            "id_2": "Учитель",
            "id_3": "Юрист",
            "id_4": "Гимнастка",
            "id_5": "Бухгалтер",
            "id_6": "Врач",
            "id_7": "Медсестра",
            "id_8": "Продавец",
            "id_9": "Танцовщица",
            "id_10": "Визажист"
        }
    }`,



    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юрист",
            "id_2": "Прокурор",
            "id_3": "Военнослужащий",
            "id_4": "Учитель",
            "id_5": "Слесарь",
            "id_6": "Механик",
            "id_7": "Аналитик данных",
            "id_8": "Художник",
            "id_9": "Инженер ",
            "id_10": "Певец"
        }
    }`,


    months: [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ],

 
maleImagesJson: `{
    "count": 4,
    "list": {
        "id_1": "https://www.reshot.com/preview-assets/icons/CRUJLP8FZS/middle-eastern-CRUJLP8FZS.svg",
        "id_2": "https://www.reshot.com/preview-assets/icons/54VYC8MAXS/russian-boy-54VYC8MAXS.svg",
        "id_3": "https://www.reshot.com/preview-assets/icons/P7ECQ9WHJZ/european-man-P7ECQ9WHJZ.svg",
        "id_4": "https://www.reshot.com/preview-assets/icons/J4KZRXV9L3/european-boy-J4KZRXV9L3.svg"
    }
}`,

femaleImagesJson: `{
    "count": 4,
    "list": {
        "id_1": "https://www.reshot.com/preview-assets/icons/ENH4GZFT72/scottish-female-ENH4GZFT72.svg",
        "id_2": "https://www.reshot.com/preview-assets/icons/2EAZLMJV63/french-woman-2EAZLMJV63.svg",
        "id_3": "https://www.reshot.com/preview-assets/icons/TAGMJ594NY/european-girl-TAGMJ594NY.svg",
        "id_4": "https://www.reshot.com/preview-assets/icons/GKDA56FRVC/blonde-girl-GKDA56FRVC.svg"
    }
}`,
        
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

 randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

 randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },


 randomGender: function() {
    return this.randomIntNumber(1) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


 randomFirstName: function() {
     if (this.person.gender === this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson);
    } else {
        return this.randomValue(this.firstNameFemaleJson);
    }
},


   

 randomSurname: function() {
   let surname = this.randomValue(this.surnameJson);
      if (this.person.gender === this.GENDER_FEMALE && !surname.endsWith('а')) {
        surname += 'а';
    }
          return surname;
  },




  // формирование отчества

randomPatronymic: () => {
    const maleName = personGenerator.randomValue(personGenerator.firstNameMaleJson);
    
    let patronymic;
    
    if (maleName === 'Михаил') {
        patronymic = 'Михайлович';
    } 
     else if (maleName === 'Никита') {
        patronymic = 'Никитич'; 
        }

     else if (maleName.endsWith('ей')) {
        patronymic = maleName.slice(0, -2) + 'еевич';
    }

    else if (maleName.endsWith('ий') || maleName.endsWith('ей')) {
        patronymic = maleName.slice(0, -2) + 'иевич';
    }
    else if (maleName.endsWith('а')) {
        patronymic = maleName.slice(0, -1) + 'ович';
    }
    else if (maleName.endsWith('я')) {
        patronymic = maleName.slice(0, -1) + 'евич';
    }
    else {
    
        patronymic = maleName + 'ович';
    }
    
   
    if (personGenerator.person.gender === personGenerator.GENDER_FEMALE) {
        if (patronymic.endsWith('ович')) {
            patronymic = patronymic.replace('ович', 'овна');
        } 
        else if (patronymic.endsWith('евич')) {
            patronymic = patronymic.replace('евич', 'евна');
        }
        else if (patronymic.endsWith('ич')) {
            patronymic = patronymic.replace('ич', 'ична');
        }
    }
    
    return patronymic;
},








 randomBirthYear: function() {
        return this.randomIntNumber(2015, 1959);
 },



 randomBirthMonth: function() {
        return this.randomIntNumber(12, 1);
 },



   randomBirthDay: function() {
        const year = this.person.birthYear;
        const month = this.person.birthMonth;

        const daysInMonth = new Date(year, month, 0).getDate();
        return this.randomIntNumber(daysInMonth, 1);
    },




  formatBirthDate: function() {
        const day = this.person.birthDay;
        const monthName = this.months[this.person.birthMonth - 1]; 
        const year = this.person.birthYear;
        return `${day} ${monthName} ${year}`;
    },




     randomProfession: function() {
     if (this.person.gender === this.GENDER_MALE) {
        return this.randomValue(this.professionMaleJson);
    } else {
        return this.randomValue(this.professionFemaleJson);
    }
},


randomPicture: function() {
    if (this.person.gender === this.GENDER_MALE) {
        return this.randomValue(this.maleImagesJson);
    } else {
        return this.randomValue(this.femaleImagesJson);
    }
},



    getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.patronymic = this.randomPatronymic();   
    this.person.surname = this.randomSurname();
    this.person.birthYear = this.randomBirthYear();
     this.person.birthMonth = this.randomBirthMonth();
    this.person.birthDay = this.randomBirthDay();
    this.person.birthDate = this.formatBirthDate()
    this.person.profession = this.randomProfession()
    this.person.picture = this.randomPicture()
    
    
    return this.person;


}




  
};
