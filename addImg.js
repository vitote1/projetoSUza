const divApliques = document.getElementById('apliquesDiv')
const divLacos = document.getElementById('lacosDiv')
const divNecessaire = document.getElementById('necessaireDiv')

function addImg (divPai, nomeProduto, preco, idParteUm, descricao, unidades, selectVa, imgsrc){
    let precoConvertido = parseFloat(preco);
    let precoNormal = "R$ " + precoConvertido.toFixed(2).replace('.', ',') ;
    const divText = document.createElement('div');
    divText.className = 'descricaoProduto';
    divText.textContent = nomeProduto;
    
    const divPreco = document.createElement('div');
    divPreco.className = 'precoProduto';
    divPreco.textContent = precoNormal;

    const divProduto = document.createElement('div');
    divProduto.className = 'produto';
    let idUnico = idParteUm +  Date.now();
    divProduto.id = idUnico;


    const imgTest = document.createElement('img');
    imgTest.className = 'imgProduto';
    imgTest.setAttribute('height', 270);
    imgTest.setAttribute('width', 180);
    imgTest.src = imgsrc;
    
    
    const botaoExcluir = document.createElement('button');
    botaoExcluir.className = 'adicionarProduto';
    botaoExcluir.id = 'botEx';
    
    const creatIcon = document.createElement('i');
    creatIcon.classList.add('material-icons');
    creatIcon.textContent = 'delete_forever';
    creatIcon.id = 'excluirIcon';

    const botaoEdit = document.createElement('button');
    botaoEdit.className = 'editarProduto';
    botaoEdit.id = 'botEdit';

    const editIcon = document.createElement('i');
    editIcon.classList.add('material-icons');
    editIcon.textContent = 'mode_edit';
    editIcon.id = 'editIcon';
    
    divPai.appendChild(divProduto);
   
    divProduto.appendChild(imgTest);
    divProduto.appendChild(divText);
    divProduto.appendChild(divPreco);
    divPreco.appendChild(botaoExcluir);
    divPreco.appendChild(botaoEdit);
    botaoExcluir.appendChild(creatIcon);
    botaoEdit.appendChild(editIcon);

    botaoExcluir.addEventListener('click', excluirProdutoADD(idUnico, idParteUm, nomeProduto));
    botaoEdit.addEventListener('click', editarInfos(nomeProduto, descricao, preco, unidades, selectVa, idUnico));
}