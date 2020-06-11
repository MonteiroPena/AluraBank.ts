import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao } from "../models/index";
import { domInject } from "../helpers/decorators/index";

export class NegociacaoController {
  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantidade")
  private _inputQuantidade: JQuery;

  @domInject("#valor")
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView", true); // true "ativa" o escapar do View.ts = que desativa todas as tags scripts da string que vai pro template
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    /* this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor"); */
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ","));

    if (!this._ehDiaUtil(data)) {
      this._mensagemView.update(
        "Somente negociações emm dias úteis, por favor"
      );
      return;
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso!");
  }

  private _ehDiaUtil(data: Date) {
    return (
      data.getDay() != DiaDaSemana.Sabado &&
      data.getDay() != DiaDaSemana.Domingo
    );
  }
}

// 0 = domingo e 6 = sabado
enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
