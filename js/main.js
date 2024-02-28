let postre;
do {
    postre = prompt("¡Bienvenido! ¿Que deseas elegir?. Marca el número de tu opción: \n1. Torta\n2. Cheesecake\n3. Galletas");
    switch (postre) {
        case "1":
            let saborTorta = seleccionarSaborTorta();
            alert(`Has seleccionado torta de ${saborTorta}.`);
            break;
        case "2":
            let saborCheesecake = seleccionarSaborCheesecake();
            alert(`Has seleccionado cheesecake de ${saborCheesecake}.`);
            break;
        case "3":
            let saborGalletas = seleccionarSaborGalletas();
            alert(`Has seleccionado galletas de ${saborGalletas}.`);
            break;
        default:
            alert("Opción no válida. Por favor selecciona una opción válida.");
    }
} while (postre !== "1" && postre !== "2" && postre !== "3");

function seleccionarSaborTorta() {
    let sabor;
    do {
        sabor = prompt("Selecciona un sabor de torta: \n1. Chocolate\n2. Vainilla\n3. Tiramisú\n4. Carrot Cake\n5. Red Velvet");
        switch (sabor) {
            case "1":
                return "Chocolate y tu monto a pagar es de $ 5500";
            case "2":
                return "Vainilla y tu monto a pagar es de $ 4000";
            case "3":
                return "Tiramisú y tu monto a pagar es de $ 5000";
            case "4":
                return "Carrot Cake y tu monto a pagar es de $ 6500";
            case "5":
                return "Red Velvet y tu monto a pagar es de $ 7000";
            default:
                console.log("Por favor selecciona una opción válida.");
        }
    } while (true);
}

function seleccionarSaborCheesecake() {
    let sabor;
    do {
        sabor = prompt("Selecciona un sabor de cheesecake: \n1. Frutos Rojos\n2. Limón");
        switch (sabor) {
            case "1":
                return "Frutos Rojos y tu monto a pagar es de $ 4700";
            case "2":
                return "Limón y tu monto a pagar es de $ 4700";
            default:
                console.log("Por favor selecciona una opción válida.");
        }
    } while (true);
}

function seleccionarSaborGalletas() {
    let sabor;
    do {
        sabor = prompt("Selecciona el sabor de tu galleta: \n1. Chocolate Chips\n2. Vainilla Chips \n3. Red Velvet");
        switch (sabor) {
            case "1":
                return "Chocolate Chips y tu monto a pagar es de $ 2700";
            case "2":
                return "Vainilla Chips y tu monto a pagar es de $ 2700";
            case "3":
                return "Red Velvet y tu monto a pagar es de $ 3200";
            default:
                console.log("Por favor selecciona una opción válida.");
        }
    } while (true);
}

