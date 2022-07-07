let view = document.querySelector('#view');
let button = document.querySelectorAll('button');

button.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            view.innerText = ' ' ;
        }else if (item.id == 'backspace'){
            let string = view.innerText.toString();
            view.innerText = string.substr(0, string.length = 1);
        }else if (view.innertext != ' ' && item.id =='equal'){
                view.innerText = eval(view.innerText);
        }else if (view.innertext == ' ' && item.id =='equal'){
            view.innerText = 'Empty!';
            setTimeout(() => (view.innerText = ' '), 2000);
        }else {
            view.innerText += item.id
        }
    }
})