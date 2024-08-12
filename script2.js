
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

