document.addEventListener('DOMContentLoaded', function () {
    const nome = localStorage.getItem('nome');
    const descricao = localStorage.getItem('descricao');
    const preco = localStorage.getItem('preco');
    const unidade = localStorage.getItem('unidade');
    const tipo = localStorage.getItem('type');
    const scr = localStorage.getItem('url');
    const id = localStorage.getItem('id');
    document.getElementById('nomeNew2').value = nome || '';
    document.getElementById('descricaoNew2').value = descricao || '';
    document.getElementById('precoNew2').value = preco || '';
    document.getElementById('unityNew2').value = unidade || '';
    document.getElementById('typeProduto2').value = tipo || 'not';
});

let botaoSalvar = document.getElementById('save-button2');
botaoSalvar.addEventListener('click', mudarInfo);

function mudarInfo() {
    const scr = localStorage.getItem('url');
    const nome = localStorage.getItem('nome'); 
    const id = localStorage.getItem('id');
    let Nome = document.getElementById('nomeNew2').value;
    let Descricao = document.getElementById('descricaoNew2').value;
    let Preco = document.getElementById('precoNew2').value;
    let Unidade = document.getElementById('unityNew2').value;
    let Tipo = document.getElementById('typeProduto2').value;
    let selectValue = document.getElementById('select' + Tipo)?.value;
     
    if (Nome && Descricao && Tipo !== 'not' && Preco > 0 && Unidade > 0 && selectValue !== 'nada') {
        let produtos = JSON.parse(localStorage.getItem(Tipo.toLowerCase() + 's')) || [];
        let encontrarProduto = produtos.findIndex(prod => prod.nome === nome);
        if (encontrarProduto !== -1) {
            let produtoAtualizado;
            if (Tipo === 'Aplique') {
                window.location.href = 'index.html';
                produtoAtualizado = new Aplique(Nome, Preco, Descricao, Unidade, selectValue);
                document.getElementById(id)?.remove();
                addImg(divApliques, Nome, Preco, Tipo.toLowerCase() + 's', Descricao, Unidade, selectValue, scr);
            } else if (Tipo === 'Laco') {
                window.location.href = 'index.html';
                produtoAtualizado = new Laco(Nome, Preco, Descricao, Unidade, selectValue);
                document.getElementById(id)?.remove();
                addImg(divLacos, Nome, Preco, Tipo.toLowerCase() + 's', Descricao, Unidade, selectValue, scr);
            } else if (Tipo === 'Necessaire') {
                window.location.href = 'index.html';
                produtoAtualizado = new Necessaire(Nome, Preco, Descricao, Unidade, selectValue);
                document.getElementById(id)?.remove();
                addImg(divNecessaire, Nome, Preco, Tipo.toLowerCase() + 's', Descricao, Unidade, selectValue, scr);
            }

        
            produtos[encontrarProduto] = produtoAtualizado;
            localStorage.setItem(Tipo.toLowerCase() + 's', JSON.stringify(produtos));
            addImg(Nome, Descricao, Preco, Unidade, Tipo, selectValue);
            alert('Produto atualizado com sucesso!');
         
        }
    } else {
        alert('Preencha todos os campos corretamente!');
    }
}