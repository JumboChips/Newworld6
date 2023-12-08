let list = []
while (true) {
    let userInput = prompt('Your order');

    if (userInput === 'new') {
        let toDo = prompt("What are you going to do?");

        list.push(toDo);
        console.log(`${toDo} is move to list!`)
    } else if (userInput === 'list') {
        console.log('************');
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1}. ${list[i]}`);
        }
        console.log('************');
    } else if (userInput === 'delete') {
        let deleteNum = prompt('Num to delete');
        deleteNum = parseInt(deleteNum);

        list.splice(deleteNum - 1, 1);
        console.log('************');
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1}. ${list[i]}`);
        }
        console.log('************');
        console.log(`Delete ${deleteNum} is complete!`);
    }
    else if (userInput === 'quit') {
        console.log('Ok, quit!')
        break;
    }
}