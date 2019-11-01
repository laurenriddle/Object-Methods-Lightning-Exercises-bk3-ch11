// console.log("This is working!")

/* Part 1: Lightning Exercise 2: Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

Use square bracket notation to output the value of those three properties to the console in Chrome. */

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

/* Part 1: Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one. */
const doctorBill = [
    {
        officeName: "Crossroads Medical Group",
        streetAddress: "491 N Sage Rd Suite 200, White House, TN 37188",
        doctorName: "Jordan Jeffrey S MD",
        patientName: "John Doe",
        visitDate: "11/1/2019",
        amountBilled: 291.38,
        dueDate: "11/15/2019"
    }
]

console.log(doctorBill[0][dateVisited])
console.log(doctorBill[0][owed])
console.log(doctorBill[0][patient])

/* Part 1: Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome. */

doctorBill.forEach(bill => {

    // Iterate all of the values of the current car
    for (const value of Object.values(bill)) {
        console.log(value)
    }
})

/* Part 2: Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

Part 2: Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
*/

const outputElement = document.querySelector("#container")
const firstDoctorBill = doctorBill[0]
for (key of Object.keys(firstDoctorBill)) {
    outputElement.innerHTML += `<span>${key}</span>`
    // console.log(key)
}

/* Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean. */

const favoriteDinner = [
    {
        name: "Spaghetti",
        ethnicity: "Italian",
        vegetarian: true
    }
]
