var inquirer = require('inquirer');
const { JSDOM } = require("jsdom")

const { window } = new JSDOM()

const start = window.performance.now()

inquirer.prompt([
    {
        name: "amstrong",
        message: "Enter any number: ",
        type: "input"
    }]).then(answer => {
        let no = parseInt(answer["amstrong"])
        determineAmstrong(no)
        const stop = window.performance.now()
        console.log(`Time Taken to execute : ${(stop - start) / 1000} seconds`);
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`Memory taken to execute: ${Math.round(used * 100) / 100} MB`);
    })



function determineAmstrong(no) {
    if (!isAmstrong(no)) {
        console.log("The input number is not an amstrong number. Hence the lowest and higest amstrong numbers are: " + findHighestLowestAmstrong(no))
    } else {
        console.log("The Given number is the amstrong number")
    }
}

function isAmstrong(no) {
    let number = no
    let noOfDigits = 0
    while (number != 0) {
        number = parseInt(number / 10)
        noOfDigits += 1
    }
    let arrayNumber = no.toString().split("")
    let sum = 0
    for (let num of arrayNumber) {
        sum += Math.pow(parseInt(num), noOfDigits)
    }
    if (sum == no) {
        return true
    } else {
        return false
    }

}

function findHighestLowestAmstrong(no) {
    let amstrongNos = [9] // The lowest amstrong number for any non-amstrong number will always be 9
    let num = no + 1
    while (!isAmstrong(num)) {
        num = num + 1
    }
    amstrongNos.push(num)
    return amstrongNos
}