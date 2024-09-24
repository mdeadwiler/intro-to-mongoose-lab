const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const prompt = require('prompt-sync')();
const Todo = require('./todo.js');
const createTodo = async () => {
    
    const todoData = {
        name: String,
        age: Number,
    };
    const todo = await Todo.create(todoData);
    console.log("New todo:", todo);
};

/*
Welcome to the CRM

What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit

Number of action to run: 2

List of customers:
id: 658226acdcbecfe9b99d5421 --  Name: Matt, Age: 43
id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6

*/



const choice = prompt('What would you like to do? ');

  console.log(`I would like to ${choice}`);
 

// Sample customer database
let customers = [
    { id: '658226acdcbecfe9b99d5421', name: 'Matt', age: 43 },
    { id: '65825d1ead6cd90c5c430e24', name: 'Vivienne', age: 6 },
    { id: '65825d1ead6cd90c5c430e25', name: 'Marquise', age: 34 }
];

/*  generate a new customer ID
function generateId() {
    return Math.random();
}*/

// Function to display the menu and return user's choice
function showMenu() {
    console.log("\nWhat would you like to do?");
    console.log("  1. Create a customer");
    console.log("  2. View all customers");
    console.log("  3. Update a customer");
    console.log("  4. Delete a customer");
    console.log("  5. Quit");
    const choice = prompt('Number of action to run: ');
    return choice;
}

// Function to create a new customer
function createCustomer() {
    const name = prompt("Enter the customer's name: ");
    const age = prompt("Enter the customer's age: ");
    const newCustomer = { id: generateId(), name, age: parseInt(age) };
    customers.push(newCustomer);
    console.log(`Customer ${name} added successfully.`);
}

// Function to view all customers
function viewCustomers() {
    console.log("\nList of customers:");
    customers.forEach(customer => {
        console.log(`id: ${customer.id} --  Name: ${customer.name}, Age: ${customer.age}`);
    });
}

// Function to update a customer
function updateCustomer() {
    viewCustomers();
    const id = prompt('Copy and paste the id of the customer you would like to update here: ');
    const customer = customers.find(c => c.id === id);
    
    if (customer) {
        const newName = prompt("What is the customer's new name? ");
        const newAge = prompt("What is the customer's new age? ");
        customer.name = newName;
        customer.age = parseInt(newAge);
        console.log('Customer updated successfully.');
    } else {
        console.log('Customer not found.');
    }
}

// Function to delete a customer
function deleteCustomer() {
    viewCustomers();
    const id = prompt('Copy and paste the id of the customer you would like to delete here: ');
    const customerIndex = customers.findIndex(c => c.id === id);

    if (customerIndex !== -1) {
        customers.splice(customerIndex, 1);
        console.log('Customer deleted successfully.');
    } else {
        console.log('Customer not found.');
    }
}

// Main application loop
function main() {
    console.log("Welcome to the CRM");

    while (true) {
        const choice = showMenu();
        switch (choice) {
            case '1':
                createCustomer();
                break;
            case '2':
                viewCustomers();
                break;
            case '3':
                updateCustomer();
                break;
            case '4':
                deleteCustomer();
                break;
            case '5':
                console.log("Exiting the CRM. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}




main();
connect()

/*------------------------------ Query Functions -----------------------------*/









  const connect = async () => {
      // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
      // Call the runQueries function, which will eventually hold functions to work
      // with data in our db.
      await runQueries()
    
      // Disconnect our app from MongoDB after our queries run.
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    
      // Close our app, bringing us back to the command line.
      process.exit();
    };
    
    const runQueries = async () => {
      console.log('Queries running.')
      // The functions calls to run queries in our db will go here as we write them.
      await createTodo();
    
    };





