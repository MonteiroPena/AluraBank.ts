//quando vc tem uma classe que tem "um burraco" que alguem precisa implementar e que essa classe não faz sentido alguem criar-la diretamente, vc pode usar o modificador ABSTRACT = ela nao deixa vc criar uma instancia
abstract class View<T> {
  protected _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom
  update(model: T) {
    this._elemento.innerHTML = this.template(model);
  }
  // define o que eu quero exibir para o usuario
  abstract template(model: T): string;
}
