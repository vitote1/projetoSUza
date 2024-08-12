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




    function adicionarNovoProduto() {
        const nomeProd = document.getElementById('nomeNew').value;
        const descProd = document.getElementById('descricaoNew').value;
        const tipProd = document.getElementById('typeProduto').value;
        const precProd = Number(document.getElementById('precoNew').value);
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
            novoProduto.imgsrc = imgsrc;
            if (tipProd === 'Aplique') {
                novoProduto = new Aplique(nomeProd, precProd, descProd, unidadeProd, selectValue);
                addImg(divApliques, nomeProd, precProd, tipProd.toLowerCase() + 's', descProd, unidadeProd, selectValue, novoProduto.imgsrc);
            } else if (tipProd === 'Laco') {
                novoProduto = new Laco(nomeProd, precProd, descProd, unidadeProd, selectValue);
                addImg(divLacos, nomeProd, precProd, tipProd.toLowerCase() + 's', descProd, unidadeProd, selectValue, novoProduto.imgsrc);
            } else if (tipProd === 'Necessaire') {
                novoProduto = new Necessaire(nomeProd, precProd, descProd, unidadeProd, selectValue);
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



let imgsrc = '';
const imgInput = document.getElementById('image-input');

imgInput.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            imgsrc = readerTarget.result;
            localStorage.setItem('minhaImagem', imgsrc);
        });

        reader.readAsDataURL(file);
        
    }
});






    function editarInfos(nome, descr, prec, unity, type, id){
        return function(){
        localStorage.setItem('nome', nome);
        localStorage.setItem('descricao', descr);
        localStorage.setItem('preco', prec);
        localStorage.setItem('unidade', unity);
        localStorage.setItem('type', type);
        localStorage.setItem('url', imgsrc);
        localStorage.setItem('id', id)
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
    
        apliques.forEach(aplique => {
            addImg(divApliques, aplique.nome, aplique.preco, 'apliques', aplique.descricao, aplique.kit, aplique.chaveiro, aplique.imgsrc);
        });
        lacos.forEach(lacos => {
            addImg(divLacos, lacos.nome, lacos.preco, 'lacos', lacos.descricao, lacos.kit, lacos.tiara, lacos.imgsrc);
        });
        necessaires.forEach(necessaires => {
            addImg(divNecessaire, necessaires.nome, necessaires.preco, 'necessaires', necessaires.descricao, necessaires.kit, necessaires.tipoBolsa, necessaires.imgsrc);
        });
    }
window.addEventListener('load', carregarProdutos);