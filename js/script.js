// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1
function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
  }
console.log(getFactorial(4)); //24

// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
function pow (num, degree) {
    if (degree > 1) { 
        return num * pow(num, degree - 1);
    } else {
        return num;
    }
}
console.log(pow (2, 4)); //16

// Task #3
// Рекурсивное суммирование
function pow (a, b) {
    if (b !== 0) {
        a++; 
        return pow (a, b-1);
    } else {
        return a;
    }
}
console.log(pow (2, 5)); //7