const freelancers = [{name: "John", specialty: "Programmer", price: 500}, 
{name: "Ashley", specialty: "Project Manager", price: 600}, 
{name: "George", specialty: "Scrum Master", price: 300}, 
{name: "Sabrina", specialty: "Data Analyst", price: 800}, 
{name: "Kody", specialty: "UI Designer", price: 1000}, 
{name: "Cynthia", specialty: "Marketer", price: 450}
];
console.log(freelancers);

const body = document.querySelector("body");

const mainHeading = document.createElement("h1");
mainHeading.textContent = "Freelancer Forum";

const secondaryHeading = document.createElement("h2");
secondaryHeading.textContent = "Available Freelancers";

const table = document.createElement("table");

const tableHeadingsnames = ["Name", "Specialty", "Price"];
const tableHeaderRow = document.createElement("tr");

tableHeadingsnames.forEach((header) => {
    const tableHeading = document.createElement("th");
    tableHeading.textContent = header;
    tableHeaderRow.append(tableHeading);
})

freelancers.forEach((freelancer) => {
    const rows = document.createElement("tr");
    table.append(rows);

    const name = document.createElement("td");
    name.textContent = freelancer.name;
    rows.append(name);

    const specialty = document.createElement("td");
    specialty.textContent = freelancer.specialty;
    rows.append(specialty);

    const price = document.createElement("td");
    price.textContent = "$" + freelancer.price;
    rows.append(price);
});

body.append(mainHeading);
body.append(secondaryHeading)
body.append(table);
table.append(tableHeaderRow);


/* function getSum(fee){
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

console.log("$" + avgStartPrice(fee)); */