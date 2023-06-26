console.log("1 Misol");
var A = 12;
console.log(A > 0);

console.log("2 Misol");
A = 12;
console.log(A % 2 == 1);

console.log("3 Misol");
A = 12;
console.log(A % 2 == 0);

console.log("4 Misol");
A = 4;
var B = 2;
console.log(A > 2 && B <= 3);

console.log("5 Misol");
A = -2;
B = 1;
console.log(A >= -1 || B < -2);

console.log("6 Misol");
var C = 4;
B = 2;
A = 2;
console.log(A <= B <= C);

console.log("7 Misol");
A = 3;
B = 5;
C = 7;
console.log(A < B < C);

console.log("8 Misol");
A = 3;
B = 5;
console.log(A % 2 == 1 && B % 2 == 1);

console.log("9 Misol");
A = 3;
B = 4;
console.log(A % 2 == 1 || B % 2 == 1);

console.log("10 Misol");
A = 3;
B = 5;
console.log((A % 2 == 0 && B % 2 == 1) || (A % 2 == 1 && B % 2 == 0));

console.log("11 Misol");
A = 2;
B = 4;
console.log((A % 2 == 1 && B % 2 == 1) || (A % 2 == 0 && B % 2 == 0));

console.log("12 Misol");
A = 3;
B = 5;
C = 7;
console.log(A > 0 && B > 0 && C > 0);

console.log("13 Misol");
A = 2;
B = -1;
C = -1;
console.log(A > 0 || B > 0 || C > 0);

console.log("14 Misol");
A = 1;
B = -1;
C = -1;
console.log(
  (A > 0 && B < 0 && C < 0) ||
    (A < 0 && B > 0 && C < 0) ||
    (A < 0 && B < 0 && C > 0)
);

console.log("15 Misol");
A = 1;
B = 1;
C = -1;
console.log(
  (A > 0 && B > 0 && C < 0) ||
    (A < 0 && B > 0 && C > 0) ||
    (A > 0 && B < 0 && C > 0)
);

console.log("16 Misol");
A = 10;
console.log(A > 9 && A % 2 == 0);

console.log("17 Misol");
A = 101;
console.log(A > 99 && A % 2 == 1);

console.log("18 Misol");
A = 1;
B = 1;
C = 1;
console.log(A == B || (B == C && C == A));

console.log("19 Misol");
A = 1;
B = -1;
C = 1;
console.log(
  Math.abs(A) == Math.abs(B) ||
    Math.abs(C) == Math.abs(B) ||
    Math.abs(A) == Math.abs(C)
);

console.log("20 Misol");
A = 1;
B = 2;
C = 3;
console.log( A!=B && B!=C && A!=C);

console.log("21 Misol");
