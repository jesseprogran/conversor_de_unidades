// Selecionar os Elementos:

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Criar uma função para converter as unidades:

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Converter a entrada para metros:
  let metrs;
  switch (fromValue) {
    case "m":
      metrs = inputElement.value;
      break;
    case "km":
      metrs = inputElement.value * 1000;
      break;
    case "cm":
      metrs = inputElement.value / 10;
      break;
    case "mm":
      metrs = inputElement.value / 1000;
      break;

    default:
      break;
  }

  // Converter metros para unidade de medidas:
  let result;

  switch (toValue) {
    case "m":
      result = metrs;
      break;
    case "km":
      result = metrs / 1000;
      break;
    case "cm":
      result = metrs * 100;
      break;
    case "mm":
      result = metrs * 1000;
      break;

    default:
      break;
  }

  // Exibir resultado no input:

  outputElement.value = result;

  // Exibir Resultado na Mensagem:

  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
  messageElement.textContent = message;
  return;

}

convertButton.addEventListener("click", convert);
