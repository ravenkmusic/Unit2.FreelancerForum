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

body.append(mainHeading);

const secondaryHeading = document.createElement("h2");
secondaryHeading.textContent = "Available Freelancers";
body.append(secondaryHeading);

const avgCostHeading = document.createElement("h3");
avgCostHeading.textContent = `The average cost of these services is ${avgCost}.`;

const table = document.createElement("table");
body.append(table);

const tableHeadingsnames = ["Name", "Specialty", "Price"];
const tableHeaderRow = document.createElement("tr");

table.append(tableHeaderRow);

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