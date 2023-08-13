let x;

x = 5 + '5'; //55 String
x = 5 + Number('5'); //10 Number
x = 5 * '5'; //55 Number
x = 5 + null; //5 + 0 = 5 Number
x = 5 + Number(null); //5 + 0 = 5 Number
x = 5 + undefined; //NaN 'Number'