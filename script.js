$(document).ready(function(){
  var result = 0,
      prevEntry = 0,
      operation = null,
      currentEntry = '0';
      // updateScreen(result);

      $('button').on('click',function(evt){
        var buttonPressed = $(this).html();
        console.log("buttonPressed " + buttonPressed);
        console.log("currentEntry" + currentEntry);
        if (buttonPressed === " AC "){
          result = 0;
          currentEntry = '0';
          updateScreen(currentEntry);
        } else if (buttonPressed === " +/- "){
          currentEntry *= -1;
        }else if (buttonPressed === ' % '){
          currentEntry = currentEntry / 100;
        }else if (buttonPressed === ' . '){
          currentEntry += '.';
        }else if (isNumber(buttonPressed)){
          if (currentEntry === '0')
              currentEntry = buttonPressed;
          else
              currentEntry += buttonPressed;
        } else if( isOperator(buttonPressed)){
          prevEntry = parseFloat(currentEntry);
          operation = buttonPressed;
          currentEntry = '';
        }else if(buttonPressed === ' = '){
          currentEntry = operate(prevEntry, currentEntry, operation);
          operation = null;
        }
        updateScreen(currentEntry);
      });
});

var updateScreen = function(displayValue){
  var displayValue = displayValue.toString();
  $('#preview').html(displayValue.substring(0,16));
};

var operate = function(a,b,operation){
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);

  if (operation === ' + ') return a + b;
  if (operation === ' - ') return a - b;
  if (operation === ' * ') return a * b;
  if (operation === ' / ') return a / b;
}

var isNumber = function(value){
  return !isNaN(value);
}

var isOperator = function(value){
  return value === ' / ' || value === " * " || value === ' + ' || value === ' - ';
};
