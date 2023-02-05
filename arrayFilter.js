/*
Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.
*/

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */
   