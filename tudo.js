let tudo = []

let request = prompt ("Please enter your request ")

while (true) {
    if (request=="quit") {
        console.log("quit the game");
        break;
    }
    
    if (request=="list") {
        console.log("---------")

        // for (let i=0; i< tudo.length; i++) {
        // console.log(i +": ",tudo[i]); 
        // }   what is the problem in this code let me find after breakfast...
        for (const item of tudo) {
            console.log(item)
            }
        
        console.log("---------")
        
    }
    else if (request=="add") {
        let task = prompt("Enter the task you want to add");
        tudo.push(task);
        console.log("task added")
    }

    else if (request=="delete") {
        let ind = prompt("Please enter the task index");
        tudo.splice(ind,1)
        console.log("task deleted")
    }

    else {
        console.log("wrong request!")
    }

    request = prompt ("Please enter your request");

}