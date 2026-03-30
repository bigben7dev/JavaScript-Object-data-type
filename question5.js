let students = [
  { names: "Joshua", score: 95 },
  { names: "Blessing", score: 68 },
  { names: "Smart", score: 80 },
  { names: "Smith", score: 45 },
  { names: "Gabriel", score: 38 },
  { names: "Bridget", score: 12 },
  { names: "Emmanuel", score: 73 },
];
let count = 0;
for (let i = 0; i < students.length; i++) {
  console.log(
    `name of student: ${students[i].names}, scored ${students[i].score}`,
  );

  if (students[i].score > 50) {
    count++;
  }
}
console.log(`${count} student(s) passed`);
