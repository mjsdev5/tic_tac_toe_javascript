const test = (result, array, index, x, y) => {
  result.push(array[index].classList[1]);
  result.push(array[index + x].classList[1]);
  result.push(array[index + y].classList[1]);
};

const checkWinner = (result, ele) => {
  if (ele !== 'circle' && ele !== 'x') {
    return;
  }
  const resultChecker = result.filter((x) => x === ele);
  if (resultChecker.length === 3) {
    console.log('win');
  }
};
function checkRow(elem, index, array) {
  const result = [];
  if (index % 3 === 0) {
    test(result, array, index, 1, 2);
    checkWinner(result, array[index].classList[1]);
  }
}

function checkColumn(elem, index, array) {
  const result = [];
  if (index < 3) {
    test(result, array, index, 3, 6);
    checkWinner(result, array[index].classList[1]);
  }
}

function checkDiagonal(elem, index, array) {
  const result = [];
  if (index === 0) {
    test(result, array, index, 4, 8);
    checkWinner(result, array[index].classList[1]);
  } else if (index === 2) {
    test(result, array, index, 2, 4);
    checkWinner(result, array[index].classList[1]);
  }
}

function result() {
  const array = Array.from(document.querySelectorAll('.cell'));

  array.forEach((elem, index) => {
    checkRow(elem, index, array);
    checkColumn(elem, index, array);
    checkDiagonal(elem, index, array);
  });
}

export default { result };
