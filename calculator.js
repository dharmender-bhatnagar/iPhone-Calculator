let string = "";
let temp = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(myfunction);
function myfunction(button) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (string.length == 0) {
                return;
            }
            console.log(string);
            string = string + temp;
            temp = "";
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            temp = "";
            document.querySelector('input').value = "0";
        }
        else if (e.target.innerHTML == "%" || e.target.innerHTML == "/" || e.target.innerHTML == "x" || e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "+/-") {
            if (temp.length == 0) {
                return;
            }
            else if (e.target.innerHTML == "+/-") {
                if (temp[0] == "-") {
                    temp = temp.slice(1);
                    document.querySelector('input').value = temp;
                }
                else {
                    temp = "-" + temp;
                    document.querySelector('input').value = temp;
                }
            }
            else if (string.at(-1) != "%" && string.at(-1) != "*" && string.at(-1) != "/" && string.at(-1) != "-" && string.at(-1) != "+") {
                if (e.target.innerHTML == "x") {
                    console.log(e.target);
                    temp = temp + "*";
                }
                else {
                    console.log(e.target);
                    temp = temp + e.target.innerHTML;
                }
                string = string + temp;
                temp = "";
            }
            else {
                if (e.target.innerHTML == "x") {
                    console.log(e.target);
                    string = string.slice(0, -1) + "*";
                    string = string + temp;
                    temp = "";
                }
                else {
                    console.log(e.target);
                    string = string.slice(0, -1) + e.target.innerHTML;
                    string = string + temp;
                    temp = "";
                }
            }

        }
        else {
            console.log(e.target);
            temp = temp + e.target.innerHTML;
            document.querySelector('input').value = temp;
        }
    })
}
