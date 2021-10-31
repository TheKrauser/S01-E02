let lista = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function retornaBio_pelo_ID(idInput) {
    let elemento;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == idInput) {
            //return lista[i].bio;
            elemento = lista[i].bio;
        }
    }
    if (elemento) {
        console.log(elemento);
        return elemento;
    }
}
//returnBio_by_ID(3);
function retornaNome_pelo_ID(idInput) {
    let elemento;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == idInput) {
            //return lista[i].name;
            elemento = lista[i].name;
        }
    }
    if (elemento) {
        console.log(elemento);
        return elemento;
    }
}
function deletaElemento_pelo_ID(idInput) {
    let elementoRemovido;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == idInput) {
            elementoRemovido = lista[i].name;
            lista.splice(i, 1);
        }
    }
    console.log(`Elemento Removido: ${elementoRemovido}\n`);
    console.log("Elementos Restantes");
    for (let j = 0; j < lista.length; j++) {
        console.log(lista[j].name);
    }
    return lista;
}
//deletaElemento_pelo_ID(2);
function renomeiaBioOuNome_pelo_ID(idInput, renameItem, newItem) {
    if (renameItem != 0 && renameItem != 1) {
        console.log("Não foi possível encontrar, escolhe entre [0] para NOME e [1] para BIO");
    }
    if (renameItem == 0) {
        lista[idInput -= 1].name = newItem;
    }
    else if (renameItem == 1) {
        lista[idInput -= 1].bio = newItem;
    }
}
function retornaBio_pelo_ID_Funcional(idInput) {
    const elemento = lista.find(x => x.id === idInput);
    console.log(elemento.bio);
}
//retornaBio_pelo_ID_Funcional(1);
function retornaNome_pelo_ID_Funcional(idInput) {
    const elemento = lista.find(x => x.id === idInput);
    console.log(elemento.name);
}
function deletaElemento_pelo_ID_Funcional(idInput) {
    const index = lista.findIndex(element => element.id == idInput);
    console.log(index);
    lista.splice(index, 1);
}
deletaElemento_pelo_ID_Funcional(2);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
//# sourceMappingURL=lista.js.map