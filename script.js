let abrirAddProd = document.getElementById('adm');
let divAddNewProd = document.getElementById('criarProduto') || false;
abrirAddProd.addEventListener('click', abrirListaAddProd);
var auxiliarAbrirAddProd = true;
function abrirListaAddProd(){
    if(auxiliarAbrirAddProd){
    divAddNewProd.style.display = 'inline-block';
    auxiliarAbrirAddProd = false;
    }
    else{
        divAddNewProd.style.display = 'none';
        auxiliarAbrirAddProd = true;
    }
}

let botao_salvar = document.getElementById('save-button');
botao_salvar.addEventListener('click' , adicionarNovoProduto);
let botao_cancelar = document.getElementById('cancelar-button');
botao_cancelar.addEventListener('click' , fecharListaAddProd);



function aparecerOpcao(divId, textoParagrafo, selectId, options) {
    const divPai = document.getElementById('selTip');
    const novoDiv = document.createElement('div');
    novoDiv.id = divId;

    const textDiv = document.createElement('div');
    textDiv.className = 'textoNovaDiv';
    textDiv.textContent = textoParagrafo;

    const novoSelect = document.createElement('select');
    novoSelect.className = 'selectCreat';
    novoSelect.id = selectId;
    novoSelect.setAttribute('name', selectId);

    const option0 = document.createElement('option');
    option0.value = 'nada';
    option0.textContent = 'Selecione uma opção';
    option0.setAttribute('selected', true);
    option0.setAttribute('disabled', true);
    option0.setAttribute('hidden', true);
    novoSelect.appendChild(option0);

    options.forEach(option => {
        const novoOption = document.createElement('option');
        novoOption.textContent = option.text;
        novoOption.value = option.value;
        novoSelect.appendChild(novoOption);
    });

    novoDiv.appendChild(textDiv);
    novoDiv.appendChild(novoSelect);
    divPai.appendChild(novoDiv);
}


function selecionarProduto() {
    const tipoProduto = document.getElementById('typeProduto').value;
    ['possuiChav', 'possuiTiara', 'possuiBolsa'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.remove();
    });
    if (tipoProduto === 'Aplique') {
        aparecerOpcao('possuiChav', 'Possui chaveiro?', 'selectAplique', [{ text: 'Sim', value: 'sim' }, { text: 'Não', value: 'nao' }]);
    } else if (tipoProduto === 'Laco') {
        aparecerOpcao('possuiTiara', 'Possui tiara?', 'selectLaco', [{ text: 'Sim', value: 'sim' }, { text: 'Não', value: 'nao' }]);
    } else if (tipoProduto === 'Necessaire') {
        aparecerOpcao('possuiBolsa', 'Qual tipo de bolsa?', 'selectNecessaire', [{ text: 'Bolsa Simples', value: 'Bolsa Simples' }, { text: 'Bolsa box', value: 'Bolsa box' }]);
    }
}


function selecionarProduto2() {
    const tipoProduto2 = document.getElementById('typeProduto2').value;
    ['possuiChav', 'possuiTiara', 'possuiBolsa'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.remove();
    });
    if (tipoProduto2 === 'Aplique') {
        aparecerOpcao2('possuiChav', 'Possui chaveiro?', 'selectAplique', [{ text: 'Sim', value: 'sim' }, { text: 'Não', value: 'nao' }]);
    } else if (tipoProduto2 === 'Laco') {
        aparecerOpcao2('possuiTiara', 'Possui tiara?', 'selectLaco', [{ text: 'Sim', value: 'sim' }, { text: 'Não', value: 'nao' }]);
    } else if (tipoProduto2 === 'Necessaire') {
        aparecerOpcao2('possuiBolsa', 'Qual tipo de bolsa?', 'selectNecessaire', [{ text: 'Bolsa Simples', value: 'Bolsa Simples' }, { text: 'Bolsa box', value: 'Bolsa box' }]);
    }
}
function aparecerOpcao2(divId2, textoParagrafo2, selectId2, options2) {
    const divPai2 = document.getElementById('selTip2');
    const novoDiv2 = document.createElement('div');
    novoDiv2.id = divId2;

    const textDiv2 = document.createElement('div');
    textDiv2.className = 'textoNovaDiv';
    textDiv2.textContent = textoParagrafo2;

    const novoSelect2 = document.createElement('select');
    novoSelect2.className = 'selectCreat';
    novoSelect2.id = selectId2;
    novoSelect2.setAttribute('name', selectId2);

    const option02 = document.createElement('option');
    option02.value = 'nada';
    option02.textContent = 'Selecione uma opção';
    option02.setAttribute('selected', true);
    option02.setAttribute('disabled', true);
    option02.setAttribute('hidden', true);
    novoSelect2.appendChild(option02);

    options2.forEach(option => {
        const novoOption2 = document.createElement('option');
        novoOption2.textContent = option.text;
        novoOption2.value = option.value;
        novoSelect2.appendChild(novoOption2);
    });

    novoDiv2.appendChild(textDiv2);
    novoDiv2.appendChild(novoSelect2);
    divPai2.appendChild(novoDiv2);
}

let imgsrc = '';
const imgInput = document.getElementById('image-input')

imgInput.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            imgsrc = readerTarget.result;
            
        });

        reader.readAsDataURL(file);
        
    }
});
    function adicionarNovoProduto() {
        console.log(imgsrc)
        const nomeProd = document.getElementById('nomeNew').value;
        const descProd = document.getElementById('descricaoNew').value;
        const tipProd = document.getElementById('typeProduto').value;
        const precProd = parseFloat(document.getElementById('precoNew').value);
        const unidadeProd = Number(document.getElementById('unityNew').value);
    
        let selectValue;
        if (tipProd === 'Aplique') {
            selectValue = document.getElementById('selectAplique')?.value;
        } else if (tipProd === 'Laco') {
            selectValue = document.getElementById('selectLaco')?.value;
        } else if (tipProd === 'Necessaire') {
            selectValue = document.getElementById('selectNecessaire')?.value;
        }
    
        if (nomeProd && descProd && tipProd !== 'not' && precProd > 0 && unidadeProd > 0 && selectValue !== 'nada' && imgsrc !== '') {
            let novoProduto;
    
            if (tipProd === 'Aplique') {
                novoProduto = new Aplique(nomeProd, precProd, descProd, unidadeProd, selectValue);
                 novoProduto.imgsrc = imgsrc;
                addImg(divApliques, nomeProd, precProd, tipProd.toLowerCase() + 's', descProd, unidadeProd, selectValue, novoProduto.imgsrc);
            } else if (tipProd === 'Laco') {
            
                novoProduto = new Laco(nomeProd, precProd, descProd, unidadeProd, selectValue);
                novoProduto.imgsrc = imgsrc;
                addImg(divLacos, nomeProd, precProd, tipProd.toLowerCase() + 's', descProd, unidadeProd, selectValue, novoProduto.imgsrc);
            } else if (tipProd === 'Necessaire') {
                
                novoProduto = new Necessaire(nomeProd, precProd, descProd, unidadeProd, selectValue);
                novoProduto.imgsrc = imgsrc;
                addImg(divNecessaire, nomeProd, precProd, tipProd.toLowerCase() + 's', descProd, unidadeProd, selectValue, novoProduto.imgsrc);
            }
    
    
            salvarProduto(tipProd.toLowerCase() + 's', novoProduto);
            
    
            document.getElementById('nomeNew').value = '';
            document.getElementById('descricaoNew').value = '';
            document.getElementById('precoNew').value = '';
            document.getElementById('unityNew').value = '';
            document.getElementById('typeProduto').value = 'not';
            document.getElementById('image-input').value = '';
            imgsrc = '';
    
            ['possuiChav', 'possuiTiara', 'possuiBolsa'].forEach(id => {
                const elem = document.getElementById(id);
                if (elem) elem.remove();
            });
    
        } else {
            alert('Preencha todos os campos corretamente!');
        }}


function salvarProduto(chave, produto) {
    let produtos = JSON.parse(localStorage.getItem(chave)) || [];
    produtos.push(produto);
    localStorage.setItem(chave, JSON.stringify(produtos));
}






const divApliques = document.getElementById('apliquesDiv')
const divLacos = document.getElementById('lacosDiv')
const divNecessaire = document.getElementById('necessaireDiv')

function addImg (divPai, nomeProduto, preco, idParteUm, descricao, unidades, selectVa, scr){
    const divText = document.createElement('div');
    divText.className = 'descricaoProduto';
    divText.textContent = nomeProduto;
    
    if (typeof preco !== 'number') {
        preco = parseFloat(preco); 
    }
    const divPreco = document.createElement('div');
    divPreco.className = 'precoProduto';
    divPreco.textContent = `RS ${preco.toFixed(2).replace('.', ',')}`;

    const divProduto = document.createElement('div');
    divProduto.className = 'produto';
    let idUnico = idParteUm +  Date.now();
    divProduto.id = idUnico;
    
    const divImg =  document.createElement('div');

    const imgTest = document.createElement('img');
    imgTest.className = 'imgProduto';
    let imgId = Date.now();
    divImg.id = imgId;
    imgTest.setAttribute('height', 270);
    imgTest.setAttribute('width', 180);

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
    imgTest.src = scr;
    divProduto.appendChild(divImg);
    divImg.appendChild(imgTest);
    divProduto.appendChild(divText);
    divProduto.appendChild(divPreco);
    divPreco.appendChild(botaoExcluir);
    divPreco.appendChild(botaoEdit);
    botaoExcluir.appendChild(creatIcon);
    botaoEdit.appendChild(editIcon);
    

    botaoExcluir.addEventListener('click', excluirProdutoADD(idUnico, idParteUm, nomeProduto));
    botaoEdit.addEventListener('click', editarInfos(nomeProduto, descricao, preco, unidades, selectVa, scr, imgId, divPai));

}
    function editarInfos(nome, descr, prec, unity, type, scr, imgId, divPai){
        return function(){
        localStorage.setItem('nome', nome);
        localStorage.setItem('descricao', descr);
        localStorage.setItem('preco', prec);
        localStorage.setItem('unidade', unity);
        localStorage.setItem('type', type);
        localStorage.setItem('url', scr);
        localStorage.setItem('ids', imgId);
        localStorage.setItem('divPai', divPai);
        window.location.href = 'mudarProd.html';
    }}
    
   

function excluirProdutoADD(idProduto, nomeLocalSto,nomeProd){
    return function(){
    let confirmarExclusao = window.confirm('Deseja excluir o produto?');
    if(confirmarExclusao){
        document.getElementById(idProduto).remove();
        let vetorLocalStorage = JSON.parse(localStorage.getItem(nomeLocalSto)) || [];
        vetorLocalStorage = vetorLocalStorage.filter(produtos => produtos.nome !== nomeProd);
        localStorage.setItem(nomeLocalSto, JSON.stringify(vetorLocalStorage));
    }
}
}

function fecharListaAddProd(){
    let confirmaCancel = window.confirm('Deseja cancelar a adição do produto?');
    if(confirmaCancel){
        document.getElementById('nomeNew').value = '';
        document.getElementById('descricaoNew').value = '';
        document.getElementById('precoNew').value = '';
        document.getElementById('unityNew').value = '';
        document.getElementById('typeProduto').value = 'not';
        const possuiChav = document.getElementById('possuiChav');
        const possuiTiara = document.getElementById('possuiTiara');
        const possuiBolsa = document.getElementById('possuiBolsa');
        if (possuiChav) possuiChav.remove();
        if (possuiTiara) possuiTiara.remove();
        if (possuiBolsa) possuiBolsa.remove();
        divAddNewProd.style.display = 'none';
        auxiliarAbrirAddProd = true;
    }
}

function carregarProdutos() {
    let apliques = JSON.parse(localStorage.getItem('apliques')) || [];
    let lacos = JSON.parse(localStorage.getItem('lacos')) || [];
    let necessaires = JSON.parse(localStorage.getItem('necessaires')) || [];
    let url = localStorage.getItem('url');
    let idImg = localStorage.getItem('ids');
    let divPaiId = localStorage.getItem('divPai');

    apliques.forEach(aplique => {
        addImg(divApliques, aplique.nome, aplique.preco, 'apliques', aplique.descricao, aplique.kit, aplique.chaveiro, aplique.imgsrc);
    });
    lacos.forEach(laco => {
        addImg(divLacos, laco.nome, laco.preco, 'lacos', laco.descricao, laco.kit, laco.tiara, laco.imgsrc);
    });
    necessaires.forEach(necessaire => {
        addImg(divNecessaire, necessaire.nome, necessaire.preco, 'necessaires', necessaire.descricao, necessaire.kit, necessaire.tipoBolsa, necessaire.imgsrc);
    });

    console.log('Carregando produtos...');
    console.log('URL da imagem:', url);
    console.log('ID da imagem:', idImg);
    console.log('Apliques:', apliques);

    if (url && idImg && divPaiId) {
        let divPai = document.getElementById(divPaiId);
        if (divPai) {
            let imagem = document.createElement('img');
            imagem.src = url;
            imagem.setAttribute('height', 270);
            imagem.setAttribute('width', 180);
            imagem.alt = 'Imagem do produto'; 
            divPai.appendChild(imagem);
            console.log('Imagem adicionada ao elemento pai.');
        } else {
            console.error(`Elemento pai com ID ${divPaiId} não encontrado.`);
        }
    } else {
        console.error('URL, ID da imagem ou ID do elemento pai ausentes.');
    }
}

window.addEventListener('load', carregarProdutos);
