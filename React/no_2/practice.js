// 元の配列
const orgArray = [1, 2, 3];

// スプレッド構文で配列の値をコピー（新しい配列が作成される）
// さらに新しい配列に要素「5」を追加
const copyArray = [...orgArray, 5];

// 元の配列に要素「4」を追加
orgArray.push(4);

console.log("orgArray:", orgArray.toString());
console.log("copyArray:", copyArray.toString());