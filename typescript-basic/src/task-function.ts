type Student = {
  name: string;
  score: number;
};

const getResultMessage = (name: string, score: number): string => {
  if (score >= 60) {
    return `${name}さんは合格です。`;
  } else {
    return `${name}さんは不合格です。`;
  }
};

const studentA: Student = {
  name: '侍太郎',
  score: 70,
};

const resultMessage = getResultMessage(studentA.name, studentA.score);

console.log(resultMessage);