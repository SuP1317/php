 minValueInt = parseInt(prompt('Минимальное знание числа для игры','0'));
 maxValueInt = parseInt(prompt('Максимальное знание числа для игры','100'));
  
   minValue = isNaN(minValueInt) ? 0 : minValueInt;
   maxValue = isNaN(maxValueInt) ? 100 : maxValueInt;

   minValue = Math.max(minValue, -999); 
   maxValue = Math.min(maxValue, 999); 


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
const textFormdAnswer = stringLengthRule(answerNumber);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${textFormdAnswer }?`;








document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
         const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 1) ?
                `Я сдаюсь..\n\u{1F92F}`:
                `Я думаю, что вы меня обманывайте...`;

            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            const textFormdAnswer = stringLengthRule(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandomOver = Math.floor(Math.random() * 3);
            let questionPhrase;

            if (phraseRandomOver === 0) {
                questionPhrase = `Думаю, что вы загадали: ${textFormdAnswer}?`;
            } else if (phraseRandomOver === 1) {
                questionPhrase = `Хм, тогда новое предположение ${textFormdAnswer}? \u{1F914}`;
            } else { 
                questionPhrase = `Понял, двигаемся дальше! Это ${textFormdAnswer}?`;
            }
            answerField.innerText = questionPhrase;
            gameRun = true;
        }
    }
});







document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
         if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 0) ?
                `Не понимаю какое число загадано. Начнем заново!\n\u{1F914}` :
                (phraseRandom === 1) ?
                `Мне кажется, что вы забыли число `:
                `Придумайте новое число, мы зашли в тупик.\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;

        } 
        else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            const textFormdAnswer = stringLengthRule(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandomLess = Math.floor(Math.random() * 3);
            let questionPhrase;

            if (phraseRandomLess === 0) {
                questionPhrase = `Это число: ${textFormdAnswer}?`;
            } else if (phraseRandomLess === 1) {
                questionPhrase = `Это наверняка число ${textFormdAnswer}?`;
            } else { 
                questionPhrase = `Итак, новая версия: ${textFormdAnswer}?`;
            }

            answerField.innerText = questionPhrase;
            gameRun = true;
        }
    }
});






document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*4);
            const answerPhrase = (phraseRandom === 0) ?
                `Ура! Ура!Ура! Было сложно, но я справился.` :
                (phraseRandom === 1) ?
                `Было легко! Думаю, что я смогу еще раз.\u{1F680}`:
                (phraseRandom === 2) ?
                `Я всегда угадываю\n\u{1F60E}`:
                `Считаю, что я молодец! \u{1F44D} Сыграем снова ? `;


        answerField.innerText = answerPhrase; 
        gameRun = false;
     }
})


 



function numberToText(number) {
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    // Обработка нуля
    if (number === 0) return 'ноль';

    let text = '';
    let isNegative = false;

    // Обработка отрицательных чисел
    if (number < 0) {
        isNegative = true;
        number = Math.abs(number);
    }

    let n = number;

    // Сотни
    if (n >= 100) {
        text += hundreds[Math.floor(n / 100)] + ' ';
        n %= 100;
    }

    // Десятки и единицы
    if (n > 0) {
        if (n < 10) {
            text += units[n];
        } else if (n >= 11 && n <= 19) {
            text += teens[n - 10];
        } else {
            text += tens[Math.floor(n / 10)] + ' ';
            text += units[n % 10];
        }
    }

    // Удаляем лишние пробелы
    text = text.trim();

    // Добавляем "минус"
    if (isNegative) {
        text = 'минус ' + text;
    }

    return text;
}

function stringLengthRule(number) {
    const textForm = numberToText(number);

    // Проверяем длину текстовой формы, включая пробелы
    if (textForm.length < 20) {
        return textForm;
    } else {
        // Если 20 символов или больше, выводим числом
        return number.toString();
    }
}
                


document.getElementById('btnRetry').addEventListener('click', function () {

 orderNumber = 1;
 gameRun = true;
   
     
  minValueInt = parseInt(prompt('Минимальное знание числа для игры','0'));
  maxValueInt = parseInt(prompt('Максимальное знание числа для игры','100'));
  
  minValue = isNaN(minValueInt) ? 0 : minValueInt;
  maxValue = isNaN(maxValueInt) ? 100 : maxValueInt;

  minValue = Math.max(minValue, -999); 
  maxValue = Math.min(maxValue, 999); 

  alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
  answerNumber  = Math.floor((minValue + maxValue) / 2);
 
  const textFormdAnswer = stringLengthRule(answerNumber);

  orderNumberField.innerText = orderNumber;
  answerField.innerText = `Вы загадали число ${textFormdAnswer}?`;

})





 // часть для рандомного перемещения стикеров по странице.

    const stickerContainer = document.getElementById('sticker-container');
    const stickers = document.querySelectorAll('.sticker');

    const containerWidth = stickerContainer.offsetWidth;
    const containerHeight = stickerContainer.offsetHeight;

    stickers.forEach(sticker => {
        const stickerWidth = sticker.offsetWidth;
        const stickerHeight = sticker.offsetHeight;

        const randomX = Math.random() * (containerWidth - stickerWidth);
        const randomY = Math.random() * (containerHeight - stickerHeight);

        sticker.style.left = `${randomX}px`;
        sticker.style.top = `${randomY}px`;
        
    
    });
