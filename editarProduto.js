document.addEventListener('DOMContentLoaded', function () {
    const nome = localStorage.getItem('nome');
    const descricao = localStorage.getItem('descricao');
    const preco = localStorage.getItem('preco');
    const unidade = localStorage.getItem('unidade');
    const tipo = localStorage.getItem('type');
    const scr = localStorage.getItem('url');
    document.getElementById('nomeNew2').value = nome || '';
    document.getElementById('descricaoNew2').value = descricao || '';
    document.getElementById('precoNew2').value = preco || '';
    document.getElementById('unityNew2').value = unidade || '';
    document.getElementById('typeProduto2').value = tipo || 'not';

    console.log('Image URL on load:', scr); // Verifica o valor armazenado
});

let botaoSalvar = document.getElementById('save-button2');
botaoSalvar.addEventListener('click', mudarInfo);

function mudarInfo() {
    const scr = localStorage.getItem('url');
    console.log('Image URL before update:', scr); // Verifica antes de usar
    const nome = localStorage.getItem('nome'); 
    let Nome = document.getElementById('nomeNew2').value;
    let Descricao = document.getElementById('descricaoNew2').value;
    let Preco = document.getElementById('precoNew2').value;
    let Unidade = document.getElementById('unityNew2').value;
    let Tipo = document.getElementById('typeProduto2').value;
    let selectValue = document.getElementById('select' + Tipo)?.value;
    let imgscr = scr || '';

    if (Nome && Descricao && Tipo !== 'not' && Preco > 0 && Unidade > 0 && selectValue !== 'nada') {
        let produtos = JSON.parse(localStorage.getItem(Tipo.toLowerCase() + 's')) || [];
        let encontrarProduto = produtos.findIndex(prod => prod.nome === nome);
        if (encontrarProduto !== -1) {
            let produtoAtualizado;
            if (Tipo === 'Aplique') {
                produtoAtualizado = new Aplique(Nome, Preco, Descricao, Unidade, selectValue);
            } else if (Tipo === 'Laco') {
                produtoAtualizado = new Laco(Nome, Preco, Descricao, Unidade, selectValue);
            } else if (Tipo === 'Necessaire') {
                produtoAtualizado = new Necessaire(Nome, Preco, Descricao, Unidade, selectValue);
            }

            produtoAtualizado.imgscr = imgscr;
            produtos[encontrarProduto] = produtoAtualizado;
            localStorage.setItem(Tipo.toLowerCase() + 's', JSON.stringify(produtos));
            alert('Produto atualizado com sucesso!');
            window.location.href = 'index.html';
        }
    } else {
        alert('Preencha todos os campos corretamente!');
    }
}
