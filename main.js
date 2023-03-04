// ukol 1

function salary (wage, hours, days) {
    return wage * hours * days
}

function taxed (amount, taxation) {
    return amount - (amount * (taxation/100))
}

const mySalary = taxed(salary(300, 8, 20), 15);
console.log(mySalary);

// ukol 2

function calculate (number1, operation, number2) {
    if (operation === "+") {
        return number1 + number2
    } else if (operation === "-") {
        return number1 - number2 
    } else if (operation === "/") {
        return number1 / number2
    } else {
        return number1 * number2
    }
}

// volitelny ukol 1 
function fillcut (str, len) {
    let stringLength = str.length;
    if (stringLength > len) {
       return str.slice(0, len)
    } else if (stringLength < len) {
        return str.padStart(len, ".")
    } else {
        return str
    }
}

// volitelny ukol 2
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      } else {
        return false
      }
    } else if (year % 4 === 0) {
      return true
    } else {
      return false
    }
}
