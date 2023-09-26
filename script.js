function arredondar() {
    const numero = parseFloat(document.querySelector("#numero").value);
    const casas_decimais = parseInt(document.querySelector("#casas_decimais").value);
  
    const resultado = Math.round(numero * Math.pow(10, casas_decimais)) / Math.pow(10, casas_decimais);
  
    document.querySelector("#resultado").textContent = resultado;
}
document.querySelector("#arredondar").addEventListener("click", arredondar);
  
function limpar() {
    document.querySelector("#numero").value = "";
    document.querySelector("#casas_decimais").value = "";
    document.querySelector("#resultado").textContent = "";
}
document.querySelector("#limpar").addEventListener("click", limpar);
  