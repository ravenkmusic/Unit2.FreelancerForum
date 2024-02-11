const freelancers = [{name: "John", specialty: "Programmer", price: 500}, 
{name: "Ashley", specialty: "Project Manager", price: 600}, 
{name: "George", specialty: "Scrum Master", price: 300}, 
{name: "Sabrina", specialty: "Data Analyst", price: 800}, 
{name: "Kody", specialty: "UI Designer", price: 1000}, 
{name: "Cynthia", specialty: "Marketer", price: 450}
];
console.log(freelancers);

/*const name = document.querySelector("name");
const job = document.querySelector("specialty");
const price = document.querySelector("price"); */
const averagePrice = document.querySelector("#avg-price");

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

console.log("$" + avgStartPrice(fee));

