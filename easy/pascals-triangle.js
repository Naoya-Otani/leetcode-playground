/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  let baseTriangle = [[1], [1, 1], [1, 2, 1]];
  if (numRows == 3) return baseTriangle;
  let prevRow = baseTriangle[2];
  for (let i = 3; i < numRows; i++) {
    let newRow = [1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    newRow.push(1);
    prevRow = newRow;
    baseTriangle.push(newRow);
  }
  return baseTriangle;
};

console.log(generate(6));
console.log(generate(7));

/* numRows = 1
  [1]
*/

/* numRows = 2
    [1]
  [1,1]
  => [[1],[1,1]]
*/

/* numRows = 3
    [1]
   [1,1]
  [1,2,1]
  => [[1],[1,1],[1,2,1]]
*/
