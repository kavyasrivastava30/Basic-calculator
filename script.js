let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let buttonsArray = Array.from(buttons);
buttonsArray.forEach(button => {
    button.addEventListener('click' , (e) =>{

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        } 
        else if (e.target.innerHTML == 'AC'){
            string = ' ';
            display.value = string;
        }
        else if(e.target.innerHTML == '=')
        {
           string = eval(string);
           display.value = string;12
        }
        else {
        string += e.target.innerHTML; 
        display.value = string;
        }

        });
    });