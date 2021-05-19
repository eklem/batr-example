document.getElementById('mathselector').onchange = function () {
  process()
}
document.getElementById('firstNumber').onchange = function () {
  process()
}

document.getElementById('secondNumber').onchange = function () {
  process()
}

const process = function () {
  const mathProcess = document.getElementById('mathselector').value
  const firstNumber = parseInt(document.getElementById('firstNumber').value)
  const secondNumber = parseInt(document.getElementById('secondNumber').value)
  let result

  switch (mathProcess) {
    case 'add':
      result = math.add(firstNumber, secondNumber)
      break
    case 'subtract':
      result = math.subtract(firstNumber, secondNumber)
      break
    case 'multiply':
      result = math.multiply(firstNumber, secondNumber)
      break
    case 'divide':
      result = math.divide(firstNumber, secondNumber)
      break
    default:
      console.log('No calculation done')
  }
  console.log(result)
  document.getElementById('resultNumber').innerText = result
}
