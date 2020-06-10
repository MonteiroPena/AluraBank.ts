/* Quando vc tem uma classe que tem "um burraco" que alguem precisa implementar e que essa classe não faz sentido alguem criar-la diretamente, vc pode usar o modificador ABSTRACT = ela nao deixa vc criar uma instancia */
export abstract class View<T> {
  protected _elemento: JQuery;

  constructor(seletor: string) {
    this._elemento = $(seletor);
  }

  /* Pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom */
  update(model: T) {
    this._elemento.html(this.template(model));
  }
  /* Define o que eu quero exibir para o usuario */
  abstract template(model: T): string;
}
