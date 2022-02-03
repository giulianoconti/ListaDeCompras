const app = document.getElementById('app');
let inputPrincipal = document.getElementById('inputPrincipal');

let idCategory = 1;
const submitCategory = () => {

    inputPrincipal = document.getElementById('inputPrincipal');

    if (inputPrincipal.value === '') {
        console.log('input vacio');
    } else {
        app.innerHTML += `
         <div class="container" id="cat${idCategory}">
            <h4>${inputPrincipal.value.toUpperCase()}:</h4>
            <p id="p${idCategory}"></p>
            <input id="input${idCategory}" type="text" placeholder="Ingrese Producto...">
            <input class="inputSubmit inputAqua" type="submit" value="Cargar" onclick="submitProduct('${idCategory}')">
            <input class="inputSubmit inputAqua" type="submit" value="Eliminar" onclick="deleteCategory('${idCategory}')">
        </div>
    `
        idCategory += 1;
    }
}

let idProduct = 1;
const submitProduct = event => {

    let text = document.getElementById(`input${event}`).value;

    if (text === '') {
        console.log('input vacio');
    } else {
        const node = document.createElement("p");
        node.setAttribute('onclick', `deleteProduct(${idProduct})`);
        node.setAttribute('id', `prod${idProduct}`);
        const textnode = document.createTextNode('X  ●' + text);
        node.appendChild(textnode);
        document.getElementById(`p${event}`).appendChild(node);

        document.getElementById(`input${event}`).value = '';
        idProduct += 1;
    }
}

const deleteCategory = event => {
    document.getElementById(`cat${event}`).remove();
}

const deleteProduct = event => {
    document.getElementById(`prod${event}`).remove();
}