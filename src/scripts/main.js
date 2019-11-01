// console.log("This is working!")

/* Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one. */

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

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

doctorBill.forEach(bill => {

    // Iterate all of the values of the current car
    for (const value of Object.values(bill)) {
        console.log(value)
    }
})