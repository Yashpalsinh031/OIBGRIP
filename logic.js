let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ' , buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'ENTER'){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'AC'){
            screenValue = "" ;
            screen.value = screenValue;
        }
        else if(buttonText == 'DEL'){
            var number = screen.value;
            var len = number.length-1;
            var newnumber = number.substring(0,len);
            screen.value = newnumber;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}