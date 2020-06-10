class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // pega o resultado do template(), vai atribuir na propriedade innerHTML que vai converter automaticamente em elemento do doom
    updadte() {
        this._elemento.innerHTML = this.template();
    }
    // define o que eu quero exibir para o usuario
    template() {
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
      </tbody>

      <tfoot>
      </tfoot>
    </table>    
    `;
    }
}
