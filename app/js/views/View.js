/* Quando vc tem uma classe que tem "um burraco" que alguem precisa implementar e que essa classe não faz sentido alguem criar-la diretamente, vc pode usar o modificador ABSTRACT = ela nao deixa vc criar uma instancia */
class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    /* Pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom */
    update(model) {
        this._elemento.html(this.template(model));
    }
}
