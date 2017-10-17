$(document).ready(function () {
  $('.buttons > span').click(function() {
    console.log("click");
    $('#screen').append($(this).text())
  });

  $('#zero').click(function() {
    $('#screen').append($(this).text())
  });

  $('#clear').click(function() {
    $('#screen').text(" ")
  });

  $('#equals').click(function() {
    calculate()
  });
});

function checkEquation(equation) {
  if (isNaN(equation[0]) || isNaN(equation[equation.length - 2])) {
    return "Error"
  } else {
    return equation
  }
}
function calculate(){
  let equation = $('#screen').text();
  equation = checkEquation(equation)

  equation = equation.replace('÷', '/')
  equation = equation.replace('X', '*')
  equation = equation.replace('=', '')

  if(equation !== 'error'){
    equation = eval(equation)
  }
  if(equation === Infinity){
    equation = 'Error'
  }
  $('#screen').text(equation)
}
