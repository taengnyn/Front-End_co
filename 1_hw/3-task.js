function findNb(m) {
    let n = 1;
    let sum = 0;
  
    while (sum < m) {
      sum += Math.pow(n, 3);
      n++;
    }
  
    if (sum === m) {
      return n - 1;
    } else {
      return -1;
    }
  }
//завдання не зовсім зрозуміло, тому алгоритми підглянуті в інтернеті
console.log(findNb(1071225));
console.log(findNb(91716553919377));