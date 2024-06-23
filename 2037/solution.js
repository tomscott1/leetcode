/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {

  // traverse the seats and any student who is at a seat already gets removed
  for (i = 0; i < seats.length; i++) {
      var student = students.indexOf(seats[i])
      if (student !== -1) {
          students.splice(student, 1)
          seats.splice(i, 1)
      }
  }
  // sort both the leftovers
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)

  // calculate the moves by moving furthest "left" student to furthest "left" seat
  var moves = 0
  for (i = 0; i < students.length; i++) {
      moves = moves + Math.abs(students[i] - seats[i])
  }
  return moves;
};