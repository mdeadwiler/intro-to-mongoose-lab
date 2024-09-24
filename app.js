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
  let crypto = [
      { id: '658226acdcbecfe9b99d5422', name: 'Btc', price: 6400 },
      { id: '65825d1ead6cd90c5c430e24', name: 'Bnb', price: 46 },
      { id: '65825d1ead6cd90c5c430e26', name: 'Eth', price: 2700 },
      { id: '65825d1ead6cd90c5c430e28', name: 'Sol', price: 15000 },
      { id: '65825d1ead6cd90c5c430e30', name: 'Ton', price: 6 },
      { id: '65825d1ead6cd90c5c430e32', name: 'Xrp', price: 60 },
      { id: '65825d1ead6cd90c5c430e34', name: 'Doge', price: 1 }
  ];
  
  // generate a new customer ID
  function generateId() {
      return Math.random();
  }
  
  // menu choices
  function showMenu() {
      console.log("\nWhat would you like to choose?");
      console.log("  1. Create Crypto Token");
      console.log("  2. View all Crypto");
      console.log("  3. Update a CryptoPrice");
      console.log("  4. Delete a Crypto");
      console.log("  5. Quit");
      const choice = prompt('Number to choose from: ');
      return choice;
  }
  
  // Function to create a new customer
  function createCrypto() {
      const name = prompt("Enter the Crypto name: ");
      const price = prompt("Enter the Crypto Price: ");
      const newCrypto = { id: generateId(), name, price: parseInt(price) };//notify's computer it is a num
      cryptoPrice.push(newCrypto);
      console.log(`Crypto ${name} added successfully.`);
      console.log(`Crypto ${price} added successfully.`);
  }
  
  // Function to view all customers
  function viewCrypto() {
      console.log("List of crypto:");
      crypto.forEach(crypto => {
          console.log(`id: ${crypto.id}  Name: ${crypto.name}, Price: ${crypto.price}`);
      });
  }
  
  // Function to update a customer
  function updateCrypto() {
      viewCrypto();
      const id = prompt('Copy and paste the id for update: ');
      const crypto = crypto.find(newCrypto => newCrypto.id === id);
      
      if (crypto) {
          const newName = prompt("crypto's new crypto? ");
          const newCrypto = prompt("crypto's new price? ");
          crypto.name = newName;
          crypto.price = parseInt(newCrypto);
          console.log('updated successfully.');
      } else {
          console.log('not found.');
      }
  }
  
  //  delete a crypto
  function deleteCrypto() {
      viewCrypto();
      const id = prompt('Copy and paste the id of the crypto you would like to delete here: ');
      const cryptoIndex = crypto.findIndex(cryptoFind => cryptoFind.id === id);
  
      if (cryptoIndex !== -1) {
          crypto.splice(cryptoIndex, 1);
          console.log('deleted successfully.');
      } else {
          console.log('Crypto not found.');
      }
  }
  
  // loop
  function main() {
      console.log("Welcome to the CRM");
  
      while (true) {
          const choice = showMenu();
  
          if (choice === '1') {
              createCrypto();
          } else if (choice === '2') {
              viewCrypto();
          } else if (choice === '3') {
              updateCrypto();
          } else if (choice === '4') {
              deleteCrypto();
          } else if (choice === '5') {
              console.log("Exiting the CRM. Goodbye!");
              break;
          } else {
              console.log("Invalid choice. Please try again.");
          }
      }
  }
  
  // Start the application
main();
//connect();

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





