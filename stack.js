class Stack {
    constructor() {
        this.stack = ["uva", "manzana"];
    }

    agregar(item) {
        this.stack.push(item);
    }

    imprimirStack() {
        console.log(this.stack);
    }

    eliminar() {
        if(this.stack.length == 0) {
            console.log("El array está vacio, no hay mas elementos por eliminar");
        } else {
            this.stack.pop();
        }
        
    } 

    vaciar() {
        this.stack = [];
    }
}

const frutas = new Stack;
frutas.agregar("MANGO");
frutas.imprimirStack();
frutas.agregar("maracuya");
frutas.imprimirStack();
frutas.eliminar();