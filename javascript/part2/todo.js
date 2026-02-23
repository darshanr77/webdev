let todo = [];

let req = prompt("enter your request:");
console.log(req);

while(true){
    if( req == "quit"){
        console.log("Quiting app");
        break;
    }

    if( req == "list"){
        console.log("----------");
        for(task of todo){
            console.log(task);
        }
        console.log("-----------");
    }
    else if ( req == "add" ){
            let task = prompt("enter the task to add");
            todo.push(task);
            console.log("task added");
        }
    }
