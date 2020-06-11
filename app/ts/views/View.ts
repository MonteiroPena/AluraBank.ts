import { logarTempoDeExecucao } from "../helpers/decorators/index";

/* Quando vc tem uma classe que tem "um burraco" que alguem precisa implementar e que essa classe não faz sentido alguem criar-la diretamente, vc pode usar o modificador ABSTRACT = ela nao deixa vc criar uma instancia */
export abstract class View<T> {
  protected _elemento: JQuery;
  private _escapar: boolean;
  // "?" indica que o parãmetro é opcional, e quando é opcinal ele vai como undefined
  constructor(seletor: string, escapar: boolean = false) {
    this._elemento = $(seletor);
    this._escapar = escapar;
  }
  @logarTempoDeExecucao()
  /* Pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom */
  update(model: T) {
    let template = this.template(model);

    /* "escapar" a tag <script> / essa expressao regular procura a incidencia da tag scrip em qualquer lugar da string, é trocada por uma string em branco */
    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }

    this._elemento.html(template);
  }
  /* Define o que eu quero exibir para o usuario */
  abstract template(model: T): string;
}
