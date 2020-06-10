class NegociacoesView extends View{

  // pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom
  updadte(model: Negociacoes): void {
    this._elemento.innerHTML = this.template(model);
  }

  // define o que eu quero exibir para o usuario
  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model
          .paraArray()
          .map((negociacao) => {
            return `
            <tr>
              <td>
                ${negociacao.data.getDate()} /
                ${negociacao.data.getMonth() + 1} /
                ${negociacao.data.getFullYear()}
              </td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
          `;
          })
          .join('')}
      </tbody>

      <tfoot>
      </tfoot>
    </table>    
    `;
  }
}
