const log = console.log;

let arr = [1,2,3,4,5,6,7,8,9,10];
function moveToStart(arr, n) {
  return (arr.length <= n || n <= 0
    ? arr.slice()
    : arr.slice(-n).concat(arr.slice(0, arr.length - n)));
}

log(moveToStart(arr, 11));
log(arr);



const data1 = [false, true, {}, 1, 0, NaN, []];
function hasArrays(arr) {
  for (let item of arr) {
    if (Array.isArray(item)) return true;
  }

  return false;
}

log(hasArrays(data1));



const data = [1, 2, 3, 4, 5, 6]
// const findEven = ;
// const findOdd = ;
function getNumberByParity(data, type) {
  if (Array.isArray(data) && ((type === 'even') || (type === 'odd'))) {
    switch(type) {
      case 'even':
        return data.filter(item => item % 2 === 0);
      case 'odd':
        return data.filter(item => item % 2 === 1);
    }
  }
  return `data - must be an array and type - must be an even or odd`
}

log(getNumberByParity(data, 'even'));
log(getNumberByParity(data, 'odd'));
log(getNumberByParity(data, ''));
log(getNumberByParity(1, ''));
log(getNumberByParity('', 'odd'));



function sequenceSum(begin, end) {
  return begin < end 
  ? begin + sequenceSum(begin + 1, end) 
  : begin === end 
    ? begin 
    : NaN;
}

1 + 2 + 3 + 4 + 5
log(sequenceSum(1, 5));