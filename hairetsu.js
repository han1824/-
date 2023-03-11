/// 配列
const colors = ["あか", "あお", "みどり"];

// 1.配列の中の"あお"をコンソールで表示する
console.log(colors[1]);


// 2.ループを使用して配列の中から全ての値をコンソールで表示する

for (let i = 0 ; i < colors.length ; i++ ){

console.log(colors[i]);

}


/// オブジェクト

const ragamuffin = {
  name: "ラガマフィン",
  hairLength: "long",
  description: "おっとりした性格で人懐っこい",
};


// 3.コンソールに「ラガマフィンです！」と表示する

console.log(ragamuffin.name+'です！');



// 4.コンソールに「ラガマフィンの特徴は、おっとりした性格で人懐っこいところです。」と表示する

console.log(ragamuffin.name+'の特徴は、'+ragamuffin.description+'ところです。');