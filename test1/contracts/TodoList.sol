// SPDX-License-Identifier: UNLICENSED 
pragma solidity 0.5.16;

contract TodoList {
    // State variables
    // They are written to the blockchain
    uint public taskCount = 0;

    struct Task {
        uint id; //
        string content; //
        bool completed; //
    }

    // The uint is like the id of each task (which is a struct type)
    mapping(uint => Task) public tasks;

    // Constructor function
    constructor() public {
        createTask("Read Papers for Lit. Review");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}