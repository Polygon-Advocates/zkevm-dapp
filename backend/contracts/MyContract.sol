pragma solidity ^0.8.0;

// Declare the contract
contract MyContract {
    // Private variable to store the count
    uint private count;

    // Event that logs the updated count value
    event CountChanged(uint newCount);

    // Constructor to initialize the counter
    // This runs when the contract is executed for the first time
    constructor() {
        count = 0; // Initialize counter to zero
    }

    // Function to get the current count
    function getCount() public view returns (uint) {
        return count;
    }

    // Function to increment the counter
    function increment() public {
        count += 1; // Increment the counter
        emit CountChanged(count); // Trigger an event to log the count change
    }

    // Function to decrement the counter
    function decrement() public {
        require(count > 0, "Counter: cannot decrement below zero"); // Ensure the count doesn't go below zero
        count -= 1; // Decrement the counter
        emit CountChanged(count); // Trigger an event to log the count change
    }
}
