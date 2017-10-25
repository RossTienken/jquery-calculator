$(document).ready(function () {
  $('.buttons > span').click(function() {
    $('#screen').append($(this).text())
  });

  $('#zero').click(function() {
    $('#screen').append($(this).text())
  });

  $('#clear').click(function() {
    $('#screen').text(" ")
  });

  $('#equals').click(function() {
    $('#screen').text(calculate($('#screen').text()))
  });
});

function checkEquation(equation) {
  if (isNaN(equation[equation.length - 2])) {
    return "Error"
  } else {
    return equation
  }
}
function calculate(x){
  let equation = x;
  equation = checkEquation(equation)
  equation = equation.replace('÷', '/')
  equation = equation.replace('x', '*')
  equation = equation.replace('=', '')
  var tooMany = equation.match(/([+]|[-]|[/]|[*])([+]|[/]|[*]|[÷]|[x])/)
  if(tooMany !== null){
    equation = 'Error'
  }
  if(equation !== 'Error'){
    equation = eval(equation)
  }
  if(equation === Infinity){
    equation = 'Error'
  }
  return equation
}
