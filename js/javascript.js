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
/*let sport = prompt('Коли вперше на головній арені Ігор замайорів Олімпійський прапор? 1 - 1896 р. в Афінах; 2 - 1920 р. в Антверпені; 3 - 1900 р. в Парижі.');
let sea = prompt('Яке море вважається найтеплішим у світі? 1 - Червоне море; 2 - Аравійське море; 3 - Мертве море.');
let islend = prompt('Який острів являється найбільшим за своєю площею на планеті? 1 - Гренландія; 2 - Мадагаскар 3; - Суматра.');
let score = 0;
if (sport == 2)
        score += 2;
    if (sea == 1)
        score += 2;
    if (islend == 1)
        score += 2;
    alert('Твій бал за тест - ' + score);*/
/*------------Task 10--------------*/


/*----------Function--------------*/
/*------------Task 1--------------*/
/*let a = +prompt("enter first number");
let b = +prompt("enter second number");
function MinMax (a, b) {
    if (a > b) {
        return ('-1');
    } else if (a < b) {
        return ('1');
    } else 
    return ('0');
}
console.log (MinMax (a, b));*/
/*------------Task 2--------------*/
/*let n = +prompt("enter the number");
function factorial (n) {
    return n ? n * factorial (n-1) : 1;
}
alert (factorial (n));*/
/*------------Task 3--------------*/
/*let a = prompt("enter the number");
let b = prompt("enter the number");
let c = prompt("enter the number");
function number(a, b, c) {
    console.log(a + b + c);
}
number(a, b, c);*/
/*------------Task 4--------------*/
/*let a = prompt("enter the width");
let b = prompt("enter the length");
function sguare(a, b) {
    if (a != 0 && b != 0) {
        console.log(a * b);
    } else if (a != 0 && b == 0) {
    console.log(a * a);
    } else 
    console.log(b * b);
}
sguare(a, b);*/
/*------------Task 5--------------*/
/*let num = +prompt("enter the number");
function perfect(num) {
    for(var i = 1, n = 0; i < num; i++){
      if(num % i === 0){
        n += i; 
      } 
    }
    return n === num;
  }
  console.log(perfect(num));*/
/*------------Task 6--------------*/
/*let a = +prompt("enter the start range");
let b = +prompt("enter the end range");
let num = +prompt("enter the number");
function perfect(num) {
    for(var i = 1, n = 0; i < num; i++){
      if(num % i === 0 && num == a || num == b){
        n += i; 
      } 
    }
    return n === num;
  }
  console.log(perfect(num));*/
/*------------Task 7--------------*/
/*let a = prompt("enter the houres");
let b = prompt("enter the minutes");
let c = prompt("enter the seconds");
function getTime() {
    if (a == 0 && b == 0 && c >= 1 && c <= 9) {
        return ('00:' + '00:' + '0' + c);
    } else if (a == 0 && b == 0 && c >= 10 && c <= 60) {
        return ('00:' + '00:' + c);
    } else if (a == 0 && b >= 1 && b <= 9 && c == 0) {
        return ('00:' + '0' + b + ':00');
    } else if (a == 0 && b >= 10 && b <= 60 && c == 0) {
        return ('00:' + b + ':00');
    } else if (a >= 1 && a <= 9 && b == 0 && c == 0) {
        return ('0' + a + ':00' + ':00');
    } else if (a >= 10 && a <= 24 && b == 0 && c == 0) {
        return (a + ':00' + ':00');
    } else if (a >= 1 && a <= 9 && b >= 1 && b <= 9 && c == 0) {
    return ('0' + a + ':0' + b + ':00');
    } else if (a >= 10 && a <= 24 && b >= 10 && b <= 60 && c == 0) {
        return (a + ':' + b + ':00');
    } else if (a >= 1 && a <= 9 && b >= 1 && b <= 9 && c >= 1 && c <= 9) {
        return ('0' + a + ':0' + b + ':0' + c);
    } else if (a >= 10 && a <= 24 && b >= 10 && b <= 60 && c >= 10 && c <= 60) {
        return (a + ':' + b + ':' + c);
    } else if (a == 0 && b >= 1 && b <= 9 && c >= 1 && c <= 9) {
        return ('00:' + '0' + b + ':0' + c);
    } else if (a == 0 && b >= 10 && b <= 60 && c >= 10 && c <= 60) {
        return ('00:' + b + ':'+ c); 
    } else if (a >= 1 && a <= 9 && b == 0 && c >= 1 && c <= 9) {
        return ('0' + a + ':00' + ':0' + c);
    } else if (a >= 10 && a <= 24 && b == 0 && c >= 10 && c <= 60) {
        return (a + ':00' + ':' + c);    
    }
}
console.log(getTime());*/
/*------------Task 8--------------*/
/*let a = +prompt("enter the houres");
let b = +prompt("enter the minutes");
let c = +prompt("enter the seconds");
function getSeconds(a, b, c) {
    if (a == 0 && b == 0 && c != 0) {
        return c;
    } else if (a == 0 && b != 0 && c == 0) {
        return (b * 60);
    } else if (a != 0 && b == 0 && c == 0) {
        return (a * 3600);
    } else if (a != 0 && b != 0 && c == 0) {
    return ((a * 3600) + (b * 60));
    } else if (a != 0 && b != 0 && c != 0) {
    return ((a * 3600) + (b * 60) + c);
    } else if (a == 0 && b != 0 && c != 0) {
        return ((b * 60) + c);
    } else if (a != 0 && b == 0 && c != 0) {
        return ((a * 3600) + c);
    } 
}
console.log (getSeconds(a, b, c));*/


/*----------Objects--------------*/
/*------------Task 1--------------*/
/*let car = {
  manufacturer: "Japan",
  model: "Mitsubishi",
  issueAge: 1979,
  averageSpeed: 200,
showInformation: function() {
    document.write(
      "Manufacturer: " +
        car.manufacturer +
        "\nModel: " +
        car.model +
        "\nAge of issue: " +
        car.issueAge +
        "\nAverage Speed: " +
        car.averageSpeed +
        "km/h"
    );
},
countingTime: function(distance) {
    if (distance % (this.averageSpeed * 4) != 0) {
    return distance / this.averageSpeed + Math.floor(distance / (this.averageSpeed * 4));
    } else if (distance % (this.averageSpeed * 4) == 0) {
    return distance / this.averageSpeed + Math.floor(distance / (this.averageSpeed * 4)) - 1;
    }
}
};
car.showInformation();
let hours = car.countingTime(1200);
document.write("You need " + hours + " hours to get to that distance!");*/
/*------------Task 2--------------*/
/*let fraction = {
  nominator: 1,
  denominator: 2,
  addition: function(nominator, denominator) {
    let sum = this.nominator / this.denominator + this.nominator / this.denominator;
    alert("Sum of fractions is " + sum);
  },
  subtruction: function(nominator, denominator) {
    let subtr = this.nominator / this.denominator - this.nominator / this.denominator;
    alert(" Subtruction is: " + subtr);
  },
  product: function(nominator, denominator) {
    let product_ =
      (this.nominator / this.denominator) * (this.nominator / this.denominator);
    alert("Product is " + product_);
  },
  division: function(nominator, denominator) {
    let div = (this.nominator / this.denominator) / (this.nominator / this.denominator);
    alert("Division of these fractions is " + div);
  }
};

let nominator, denominator;
fraction.addition(nominator, denominator);
fraction.subtruction(nominator, denominator);
fraction.division(nominator, denominator);
fraction.product(nominator, denominator);*/

/*------------Task 3--------------*/

/*let time = {
  hours: 12,
  minutes: 45,
  seconds: 17,
  showTime: function() {
    alert(`${this.hours}:${this.minutes}:${this.seconds}`);
},
  addSeconds: function(seconds) {
    if (seconds <= 0) {
      alert("You entered incorrect time!");
    } else if (seconds + this.seconds >= 60) {
      let differenceMin = Math.floor((this.seconds + seconds) / 60);
      this.seconds = (this.seconds + seconds) % 60;
      this.addMinutes(differenceMin);
    } else {
      this.seconds += seconds;
    }
  },
  addMinutes: function(minutes) {
    if (minutes <= 0) {
      alert("You entered incorrect time!!!");
    } else if (this.minutes + minutes >= 60) {
      let differenceHours = Math.floor((this.minutes + minutes) / 60);
      this.minutes = (this.minutes + minutes) % 60;
      this.addHours(differenceHours);
    } else {
      this.minutes += minutes;
    }
  },
  addHours: function(hours) {
    if (hours <= 0) {
      alert("You entered incorrect time!");
    } else if (hours + this.hours >= 24) {
      this.hours = (this.hours + hours);
    } else {
      this.hours += hours;
    }
  }
};
time.addHours(25);
time.showTime();
time.addMinutes(2);
time.showTime();
time.addSeconds(20);
time.showTime();
*/

/*----------Arrays--------------*/
/*------------Task 1--------------*/
/*let listShop = [
    { nameProduct: "pear", count: "10", isBuy: true },
    { nameProduct: "peach", count: "6", isBuy: true },
    { nameProduct: "tomato", count: "8", isBuy: false },
    { nameProduct: "potato", count: "20", isBuy: true },
    { nameProduct: "apple", count: "3", isBuy: false },
  ];
let showProducts = function() {
    listShop.sort(function(a, b) {
    return b.isBuy - a.isBuy;
});
let i = 0;
for (let product of listShop) {
    console.log(
    `Product# ${i} ${product.nameProduct}, ${product.count}, ${product.isBuy}`
    );
i++;
}
console.log("\n");
};
let addProduct = function(Product) {
let count = 0;
for (let i = 0; i < listShop.length; i++) { 
    if (listShop[i].nameProduct === Product) {
    count = i;
    }
}
if (count === 0) {
    listShop[listShop.length - 1] = {
    nameProduct: Product,
    count: "1",
    isBuy: true
};
    console.log("count === 0");
} else {
    listShop[count].count = Number(listShop[count].count);
    listShop[count].count += 1;
    }
};
let buyProduct = function(myProduct) {
let count = 0;
myProduct = String(myProduct);
for (let i = 0; i < listShop.length; i++) {
    if (listShop[i].nameProduct === myProduct) {
    count = i;
    }
}

if (count === 0) {
    console.log(`Don't have this product: ${myProduct}`);
} else {
    listShop[count].isBuy = true;
    }
};
showProducts(listShop);
addProduct("peach");
showProducts(listShop);
buyProduct("tomato");
showProducts(listShop);*/
/*let chequeShop = [
    { productName: "bread", count: "3", price: "5" },
    { productName: "milk", count: "2", price: "3" },
    { productName: "sausage", count: "4", price: "7" },
    { productName: "fish", count: "5", price: "12" },
    { productName: "yoghurt", count: "5", price: "4" }
];
let showCheque = function() {
for (let info of chequeShop) {
    console.log(
    `Name: ${info.productName}, Count: ${info.count}, Price: ${info.price}`
    );
}
console.log("\n");
};
let sumOfPurchase = function() {
let sum = 0;
for (let info of chequeShop) {
    info.price = Number(info.price);
    sum += info.price;
}
return sum;
};

let getExpensivePurchase = function() {
let minPrice = 0;
for (let info of chequeShop) {
    info.price = Number(info.price);
    if (info.price > minPrice) {
    minPrice = info.price;
    }
}
return minPrice;
};
let averagePriceOfProduct = function() {
let averagePrice = 0;
let count = 0;
for (let i = 0; i < chequeShop.length; ++i) {
    chequeShop[i].price = Number(chequeShop[i].price);
    averagePrice += chequeShop[i].price;
    count++;
}
averagePrice /= count;
return averagePrice;
};
showCheque();
let sum = sumOfPurchase();
console.log(`Sum of purchase is: ${sum}`);

let maxPrice = getExpensivePurchase();
console.log(`Max price is: ${maxPrice}`);

let averagePrise = averagePriceOfProduct();
console.log(`Averagge price is: ${averagePrise}`);*/
/*let content = [
    {
        title: 'Toyota Lorem',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
        year: '2016',
        brands: 'Toyota',
        price: '10000'
    },
    {
        title: 'Ford 480',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
        year: '2014',
        brands: 'Ford',
        price: '7000'
    },
    {
        title: 'Toyota 363',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
        year: '2016',
        brands: 'Toyota',
        price: '6000'
    },
    {
        title: 'MERCEDES-Benz GLK25',
        description: "The car from Canada MERCEDES-Benz GLK25  2.1 L Diesel has appeared on sale  . All-wheel drive car with a 2.1-liter diesel engine. The car after the accident with a mileage of  190656 km .",
        year: '2020',
        brands: 'MERCEDES',
        price: '21000'
    },
    {
        title: 'Hyundai Sonata',
        description: "A car from the USA Hyundai Sonata 2.4 L Gasoline appeared on sale  . Front-wheel drive car with a 2.4-liter gasoline engine. The car after the accident with a mileage of 117560  ml . ",
        year: '2014',
        brands: 'Hyundai',
        price: '8000'
    },
    {
        title: 'Volkswagen Tiguan',
        description: "The car from the USA Volkswagen Tiguan 2.0 L Gasoline has appeared on sale  . All-wheel drive car with a 2.0-liter gasoline engine. The car after the accident with a mileage of  59568 ml .  ",
        year: '2013',
        brands: 'Volkswagen',
        price: '9500'
    },
    {
        title: 'Ford Focus Se',
        description: "Buy a car from the USA  Ford Focus Se at the best price in Rivne only on  USA-CARS.SHOP . USA-CARS.SHOP - your car from the USA! Delivery of a car from the USA to Exactly, to buy a car from the USA to Exactly, a car from the USA under the order Exactly.",
        year: '2015',
        brands: 'Ford',
        price: '5890'
    }
]
function yourSort(arr, year) {
    return arr.sort
}*/

