const freelancers = [{name: "John", specialty: "Programmer", price: 500}, 
{name: "Ashley", specialty: "Project Manager", price: 600}, 
{name: "George", specialty: "Scrum Master", price: 300}, 
{name: "Sabrina", specialty: "Data Analyst", price: 800}, 
{name: "Kody", specialty: "UI Designer", price: 1000}, 
{name: "Cynthia", specialty: "Marketer", price: 450}
];

const currentPrices = [];

const body = document.querySelector("body");

const mainHeading = document.createElement("h1");
mainHeading.textContent = "Freelancer Forum";

body.append(mainHeading);

const secondaryHeading = document.createElement("h2");
secondaryHeading.textContent = "Available Freelancers";
body.append(secondaryHeading);

const avgCostHeading = document.createElement("h3");
body.append(avgCostHeading);

const duplicateDisclaimer = document.createElement("h4");
body.append(duplicateDisclaimer);

const headingsNames = document.createElement("h3");
headingsNames.textContent = "Name | Specialty |  Starting Price";

body.append(headingsNames);

function displayRandomFreelancer() {
    const freelancer = freelancers[Math.floor(Math.random()* freelancers.length)];
    const person = document.createElement("ul");    
    person.innerHTML = `${freelancer.name} | ${freelancer.specialty} | $${freelancer.price}`;
        currentPrices.push(freelancer.price);
        body.append(person);
        getAvgPrice();    
}

function getAvgPrice() {
    let unique = [...new Set(currentPrices)];
    let sum = 0;
    for (i = 0; i < unique.length; i++){
        sum += unique[i];
    }

    const avg = Math.round(sum / unique.length);
    console.log(unique);
    avgCostHeading.textContent = `The average starting cost of the currently available services is $${avg}.`
    duplicateDisclaimer.textContent = "*Duplicate freelancer listings are not included in price average.*"
    return avg;
}


const intervalID = setInterval(displayRandomFreelancer, 2000);

setTimeout(function(){
    clearInterval(intervalID);
}, 15000);