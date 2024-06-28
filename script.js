let display = document.getElementById('output');
// through this we will access all buttons
let buttons = document.querySelectorAll('button');

//Array.from will change all nodes (buttons) in array
let buttonsArray = Array.from(buttons);

let stringg = '';
buttonsArray.forEach(btn => {
      // again we have change all array in single node in btn

      btn.addEventListener('click', (e) => {
            if (e.target.innerHTML == 'DEL')
            {
                  stringg = stringg.substring(0, stringg.length - 1);
                  display.value=stringg
            }
            else if (e.target.innerHTML == "AC") {
                  stringg = "";
              display.value = stringg;
            }
            else if(e.target.innerHTML == '=')
            {
                  // eval() :- is inbuild library who manage every calculation
                  stringg = eval(stringg);
                  display.value = stringg;
            }
            else {
              stringg += e.target.innerHTML; // target us spacific button ke liye and jab target.innerHTML likhte hai to us spacific button ka content likhte hai
              display.value = stringg;
            //   console.log(e.target.innerHTML);
            }
      });

});