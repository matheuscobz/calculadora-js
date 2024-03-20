function Calculadora(){
  this.display = document.querySelector('.display');
  this.clear = document.querySelector('.btn-clear');
  this.apagar = document.querySelector('.btn-del');

  this.apertaBotao = () => {
    document.addEventListener('click', (event) => {
      const tecla = event.target;
      
      if (tecla.classList.contains('btn-num')){
        this.teclaPressionada(tecla.innerText);
      }

      if(tecla.classList.contains('btn-clear')){
        this.limpaDisplay();
      }

      if(tecla.classList.contains('btn-del')){
        this.apagarDigito();
      }

      if(tecla.classList.contains('btn-eq')){
        this.executarCalculadora();
      }
    })
  }

  this.teclaPressionada = (valor) => {
    this.display.value += valor
  }

  this.limpaDisplay = () => {
    this.display.value = '';
  }

  this.apagarDigito = () => {
    this.display.value = this.display.value.slice(0, -1);
  }


  this.executarCalculadora = () => {
    let conta = this.display.value;
    
    try {
      conta = eval(conta)
      if(!conta){
        alert("Conta inválida.");
        return
      }

      this.display.value = String(conta)
    } catch (e) {
      alert("Conta inválida.")
      return
    }
  }
}

const calc = new Calculadora();

calc.apertaBotao();