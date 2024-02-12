const freelancers = [{name: "John", specialty: "Programmer", price: 500}, 
{name: "Ashley", specialty: "Project Manager", price: 600}, 
{name: "George", specialty: "Scrum Master", price: 300}, 
{name: "Sabrina", specialty: "Data Analyst", price: 800}, 
{name: "Kody", specialty: "UI Designer", price: 1000}, 
{name: "Cynthia", specialty: "Marketer", price: 450}
];

const body = document.querySelector("body");

const mainHeading = document.createElement("h1");
mainHeading.textContent = "Freelancer Forum";

body.append(mainHeading);

const secondaryHeading = document.createElement("h2");
secondaryHeading.textContent = "Available Freelancers";
body.append(secondaryHeading);

/* const avgCostHeading = document.createElement("h3");
avgCostHeading.textContent = `The average cost of these services is ${avgCost}.`;
body.append(avgCostHeading); */

const headingsNames = document.createElement("h3");
headingsNames.textContent = "Name | Specialty |  Price";

body.append(headingsNames);


freelancers.forEach((freelancer) => {
  
    const person = document.createElement("li");
    person.textContent = `${freelancer.name} | ${freelancer.specialty} | $${freelancer.price}`; 
    body.append(person);
});

const intervalTime = setInterval(randomFreelancer, 3000);

function randomFreelancer () {
    const freelancer = freelancers[Math.floor(Math.random()*freelancers.length)];
    const person = document.createElement("ul");
    person.innerHTML = `${freelancer.name} | ${freelancer.specialty} | $${freelancer.price}`;
    return freelancer;
} 

function generateAvgPrice(freelancers){
   let sum = 0;
    for (const freelancer of freelancers){
        sum += freelancer.price;
        return sum;
    }

    let avg = (sum / freelancers.length);
    console.log(avg);
    return avg;
}