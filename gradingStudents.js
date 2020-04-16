function gradingStudents(grades) {
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }
    const gradeString = grade.toString();
    if (gradeString[1] == 3 || gradeString[1] == 8) {
      return grade + 2;
    }
    if (gradeString[1] == 4 || gradeString[1] == 9) {
      return grade + 1 ;
    }
    return grade
  });
}

console.log(gradingStudents([4, 38, 42, 54]));
