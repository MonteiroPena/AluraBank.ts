class View<T> {
  protected _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom
  update(model: T) {
    this._elemento.innerHTML = this.template(model);
  }
  // define o que eu quero exibir para o usuario
  template(model: T): string {
    throw new Error("Você deve implementar o método template");
  }
}
