//Cria a lista pedida
let lista = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio : "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

// PARADIGMA IMPERATIVO
// PARADIGMA IMPERATIVO
// PARADIGMA IMPERATIVO

//Retorna a Bio a partir do ID passado no 'idInput'
function retornaBio_pelo_ID(idInput : number)
{
    //Variavel para armazenar o elemento
    let elemento;

    //For percorrendo a lista e fazendo a verificação de cada elemento
    for (let i = 0; i<lista.length; i++)
    {
        //Quando o elemento tiver o mesmo id que foi passado na função
        if (lista[i].id == idInput)
        {
            //Armazena na variavel elemento
            elemento = lista[i].bio;
        }
    }

    //Se elemento existir
    if (elemento)
    {
        //Retorna e imprime
        console.log(elemento);
        return elemento;
    }
}

//returnBio_by_ID(3);

//Retorna o nome a partir do ID passado no 'idInput'
function retornaNome_pelo_ID(idInput : number)
{
    //Exatamente a mesma coisa que a anterior, mas dessa vez checando o parametro name
    let elemento;

    for (let i = 0; i<lista.length; i++)
    {
        if (lista[i].id == idInput)
        {
            //return lista[i].name;
            elemento = lista[i].name;
        }
    }

    if (elemento)
    {
        console.log(elemento);
        return elemento;
    }
}

//retornaNome_pelo_ID(0);

//Deleta um elemento da lista com base no ID passado na 'idInput'
function deletaElemento_pelo_ID(idInput : number)
{
    //Cria a variavel que vai armazenar o elemento removido (não é necessário, só um extra)
    let elementoRemovido;

    //For percorrendo por toda a lista
    for (let i = 0; i < lista.length; i++)
    {
        if (lista[i].id == idInput)
        {
            //Quando encontrar o ID passado, usa a função splice e passa o index (i) e a quantidade de itens a ser
            //removidos a partir dali (1)
            elementoRemovido = lista[i].name;
            lista.splice(i, 1);
        }
    }

    //Informa o elemento removido
    console.log(`Elemento Removido: ${elementoRemovido}\n`);
    console.log("Elementos Restantes");

    //Percorre a lista só para mostrar na tela os elementos que ainda restam
    for (let j = 0; j < lista.length; j++)
    {
        console.log(lista[j].name);
    }
    
    //Retorna a lista
    return lista;
}

//deletaElemento_pelo_ID(2);

//Renomeia a Bio ou o Nome a partir do ID passado na 'idInput'
//A variavel 'renameItem' será usada para indicar qual item ele quer renomear, sendo 0 para nome e 1 para a bio
//'newName' serve para o usuario digitar o texto que ele quer que fique no lugar do elemento escolhido
function renomeiaBioOuNome_pelo_ID(idInput : number, renameItem : number, newName : string)
{
    //Se o valor informado for diferente de 0 e 1 então termine a função e retorne uma mensagem no console
    if (renameItem != 0 && renameItem != 1)
    {
        console.log("Não foi possível encontrar, escolhe entre [0] para NOME e [1] para BIO");
        return;
    }

    //Se o valor informado for 0 (nome)
    if (renameItem == 0)
    {
        //Percorre a lista
        for (let i = 0; i < lista.length; i++)
        {
            if (lista[i].id == idInput)
            {
                //Ao encontrar o elemento, renomeia o nome para o que está na variavel 'newName'
                lista[i].name = newName;
            }
        }

    }

    //Se o valor informado for 1 (bio)
    else if (renameItem == 1)
    {
        for (let i = 0; i < lista.length; i++)
        {
            if (lista[i].id == idInput)
            {
                //Ao encontrar o elemento, renomeia a bio para o que está na variavel 'newName'
                lista[i].bio = newName;
            }
        }
    }
}

//renomeiaBioOuNome_pelo_ID(0, 1, "Testando");

// PARADIGMA FUNCIONAL
// PARADIGMA FUNCIONAL
// PARADIGMA FUNCIONAL

function retornaBio_pelo_ID_Funcional(idInput : number)
{
    //Usa um .find para procurar nos elementos e retornar o que tiver o id igual ao que foi passado no 'idInput'
    //O valor retornado é armazenado na variavel elemento
    const elemento = lista.find(x => x.id === idInput);

    //Imprime na tela e retorna a bio do elemento
    console.log(elemento.bio);
    return elemento;
}

//retornaBio_pelo_ID_Funcional(1);

function retornaNome_pelo_ID_Funcional(idInput : number)
{
    //Mesmo esquema da anterior, mas retorna o name
    const elemento = lista.find(x => x.id === idInput);

    console.log(elemento.name);
    return elemento;
}

//retornaNome_pelo_ID_Funcional(1);

function deletaElemento_pelo_ID_Funcional(idInput : number)
{
    //Usando o .findIndex para retornar o primeiro parametro no qual o ID seja igual o idInput
    const index = lista.findIndex(element => element.id == idInput);
    //Armazena o elemento removido na variavel
    const removido = lista.splice(index, 1);
    //Imprime na tela
    console.log(`${removido[0].name} removido com sucesso!`);
}

//deletaElemento_pelo_ID_Funcional(2);

function renomeiaBioOuNome_pelo_ID_Funcional(idInput : number, renameItem : number, newName : string)
{
    //Mesmo esquema da anterior
    const index = lista.findIndex(element => element.id == idInput);
    
    //Se o valor passado na 'renameItem' for 0 irá renomear o name a partir do que foi passado na 'newName'
    if (renameItem == 0)
        lista[index].name = newName;
    //Caso seja 1, irá renomear a bio
    else if (renameItem == 1)
        lista[index].bio = newName;
}

//renomeiaBioOuNome_pelo_ID_Funcional(3, 0, "Testando");
