# TEST 1 BLOCKCHAIN APPLICATION

**TodoList Blockchain App**

- List tasks in the smart contract
- List tasks in the console

    -  Open Truffle Console
        truffle console

    - then enter:
        todoList = await TodoList.deployed()

        tasks = await todoList.tasks(1)

        tasks.id.toNumber() // task id
        tasks.content // the content of the task

- List tasks in the client side application
- List tasks in the test 




