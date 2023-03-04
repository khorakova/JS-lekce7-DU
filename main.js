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