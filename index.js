
// $("button").click(function() {
//     var fired_button = $(this).val();
//     var prvalue=fired_button;
//     var btn = document.getElementById("display");
//     btn.value = fired_button+prvalue; 
//     btn.innerHTML = fired_button+prvalue;
//     //document.getElementById(display).innerHTML=fired_button;
// });
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//         value = button.value;
//         prvalue=value;
//         var btn = document.getElementById("display");
//         btn.value =value; 
//         btn.innerHTML =value;
//     });
// });
function clearScreen() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").value = "";
   }
   
function display(val) {
     document.getElementById("result").innerHTML += val;
    }
     
function calculate() {
    var p = document.getElementById("result").innerHTML;
    var q = eval(p);
    document.getElementById("result").innerHTML = q;
    }