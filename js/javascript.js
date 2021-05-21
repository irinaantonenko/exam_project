/*------------Task 1--------------*/
    /*let age = prompt('Скільки тобі років?');
    if (age >= 0 && age < 18)
    {
        console.log('Ти дитина');
    }
    else if (age >= 18 && age < 60)
    {
        console.log('Ти дорослий');
    }
    else if (age >= 60)
    {
        console.log('Ти пенсіонер');
    }*/
/*------------Task 2--------------*/
/*let number = prompt('Enter the number from 0 to 9');
switch(number) {
    case '0':
        console.log('0 is )');
        break;
    case '1':
        console.log('1 is !');
        break;
    case '2':
        console.log('2 is @');
        break;
    case '3':
        console.log('3 is #');
        break;
    case '4':
        console.log('4 is $');
        break;
    case '5':
        console.log('5 is %');
        break;
    case '6':
        console.log('6 is ^');
        break;
    case '7':
        console.log('7 is &');
        break;
    case '8':
        console.log('8 is *');
        break;
    case '9':
        console.log('9 is (');
        break;
    }*/
/*------------Task 3--------------*/
    /*let number = prompt('Введіть трьохзначне число');
    number = number + '';
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
    {
        alert('TRUE');
    }
    else
        alert('FALSE');*/
/*------------Task 4--------------*/
    /*let year = prompt('Введіть свій рік народження');
    if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0)
    {
        alert('Високосний рік');
    }
    else 
        alert('Не високосний рік');*/
/*------------Task 5--------------*/
    /*let number = prompt('Введіть 5-значне число');
    number = number + '';
    if (number[0] == number[4] && number[1] == number[3])
    {
        alert('паліндром');
    }    
    else 
        alert('не паліндром');*/
/*------------Task 6--------------*/
   /*let amount = prompt('Веедіть кількість USD для обміну');
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
    switch(currency) {
        case '1':
            console.log(amount*0.82 + 'EUR');
            break;
        case '2':
            console.log(amount*27.46 + 'UAH');
            break;
        case '3':
            console.log(amount*1.70 + 'AZN');
            break;
    }*/
/*------------Task 7--------------*/
   /*let amount = prompt('Введіть суму покупки:');
    if (amount >=200 && amount < 300)
        alert(amount/100*97 + 'UAH з 3% знижкою');
    else if (amount >=300 && amount < 500)
        alert(amount/100*95 + 'UAH з 5% знижкою');
    else if (amount >=500)
        alert(amount/100*93 + 'UAH з 7% знижкою');
    */
/*------------Task 8--------------*/  
    /*let circle = +prompt('Введіть довжину кола');
    let square = +prompt('Введіть периметр квадрата');
    if (square / circle >= 1.27)
    {
        alert ('коло може вміститись в квадрат');
    }
        else 
        alert ('коло не вміщається в квадрат');*/
/*------------Task 9--------------*/ 
let sport = prompt('Коли вперше на головній арені Ігор замайорів Олімпійський прапор? 1 - 1896 р. в Афінах; 2 - 1920 р. в Антверпені; 3 - 1900 р. в Парижі.');
let sea = prompt('Яке море вважається найтеплішим у світі? 1 - Червоне море; 2 - Аравійське море; 3 - Мертве море.');
let islend = prompt('Який острів являється найбільшим за своєю площею на планеті? 1 - Гренландія; 2 - Мадагаскар 3; - Суматра.');
let score = 0;
if (sport == 2)
        score += 2;
    if (sea == 1)
        score += 2;
    if (islend == 1)
        score += 2;
    alert('Твій бал за тест - ' + score);
/*------------Task 10--------------*/

