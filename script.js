let myName = prompt("Comment t'appelles-tu ?")

function sayHello(firstName, hour) {
    if (hour >= 18) {
        let soirMessage = "Bonsoir " + firstName + " !"
        document.querySelector('h1').innerText = soirMessage;
    } else {
        let jourMessage = "Bonjour " + firstName + " !"
        document.querySelector('h1').innerText = jourMessage;
    }
    
    }

sayHello(myName, 11);
sayHello(myName, 22);
sayHello(myName, 18);
