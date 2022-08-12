// //テンプレート文字列
// const name = "Nana";
// const age = "36";
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// //アロー関数
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(10, 20));

// //分割代入
// const myProfille = {
//   name2: "Nana",
//   age2: 36
// };

// const { name2, age2 } = myProfile;
// const message2 = `名前は${name2}です。年齢は${age2}です。`;
// console.log(message2);

//デフォルト値、引数など　　（ゲスト"の部分）
// const sayHello = (name3 + "ゲスト") => console.log(`こんにちは${name3}さん`);
// sayHello("Nana");

//スプレッド構文...
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //上と同様

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ... arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、統合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
//ここまでスプレッド構文

//map/filterを使った配列の処理
// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++){
// console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++){
// console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// 三項演算子
//　ある条件？　条件がtrueの時　：　条件がfalseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ?  '100を超えています！！'　: '許容範囲ないです';
// }
// console.log(checkSum(50, 50));

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "金額未設定です";
console.log(fee2);
