var user = prompt("whats your name").toUpperCase();

switch(user) {
    case 'JACK':
        var starting = prompt("does your name start with a j?").toLowerCase();
        var ending = prompt("does your name end with ack?").toLowerCase();
        if(starting === "yes" && ending === "yes") {
        console.log("what a fantastic name you have");
        }
        else {
            console.log("doesnt sound right");
        }
        break; 

    case 'JUSTIN':
        var lastName = prompt("is your last name fischer?").toLowerCase();
        var age = prompt("are you over 25?").toLowerCase();
        if(lastName === "yes" || age === "yes") {
        console.log("sounds awful, being the older brother is bad");
        }
        else {
            console.log("dont you wish you were the younger brother?");
        }
        break;
    case 'JAY':
        console.log("does every name start with a J?");
        break;
    default:
        console.log("wrong starting letter");
}