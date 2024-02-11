const freelancers = ["John", "Ashley", "George", "Sabrina", "Kody", "Cynthia"];

const specialty = ["Programmer", "Project Manager", "Scrum Master", "Data Analyst", "UI Designer", "Marketer"];

const fee = [500, 600, 300, 800, 1000, 450];

/*const name = document.querySelector("name");
const job = document.querySelector("specialty");
const price = document.querySelector("price"); */

function getSum(fee){
    let sum = 0;
    for(i = 0; i < fee.length; i++){
        sum += fee[i];
    }
    return sum;
}

function avgStartPrice(fee){
    const sum = getSum(fee);
    const avg = Math.round((sum / fee.length));
    return avg;
}

console.log(avgStartPrice(fee));