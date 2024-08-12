class Produto {
    constructor(nome, preco, descricao, kit) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.kit = kit;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getDescricao() {
        return this.descricao;
    }
    getKit() {
        return this.kit;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    setPreco(novoPreco) {
        this.preco = novoPreco;
    }
    setDescricao(novoDescricao) {
        this.descricao = novoDescricao;
    }
    setKit(novoKit) {
        this.kit = novoKit;
    }
    mostrarInfo() {
        return `Nome do Produto: ${this.nome} \n Valor: ${this.preco} \n Descrição: ${this.descricao} \n Quantidade de produtos inclusos: ${this.kit}`;
    }
}


class Aplique extends Produto {
    constructor(nome, preco, descricao, kit, chaveiro) {
        super(nome, preco, descricao, kit)
        this.chaveiro = chaveiro;
    }

    getChaveiro() {
        return this.chaveiro;
    }

    setChaveiro(NovoChaveiro) {
        this.chaveiro = NovoChaveiro;
    }
}



class Laco extends Produto {
    constructor(nome, preco, descricao, kit, tiara) {
        super(nome, preco, descricao, kit)
        this.tiara = tiara;
    }
    getTiara() {
        return this.tiara;
    }

    setTiara(NovoTiara) {
        this.tiara = NovoTiara;
    }
}

class Necessaire extends Produto {
    constructor(nome, preco, descricao, kit, tipoBolsa) {
        super(nome, preco, descricao, kit);
        this.tipoBolsa = tipoBolsa;
    }
    getTipoBolsa() {
        return this.tipoBolsa;
    }

    setTipoBolsa(novoTipoBolsa) {
        this.tipoBolsa = novoTipoBolsa;
    }
    

}