function display (number1)
{
    if(number1<0) {
        document.getElementById('disp').value = 0;
    }

    else {
        document.getElementById('disp').value = number1;
    }
}

function increment() {
    var num = document.getElementById('disp').value;
    num = parseInt(num);
    num += 1;
    console.log(num);
    display(num);
}

function decrement (){
    var num = document.getElementById('disp').value;
    num = parseInt(num);
    num -= 1;
    console.log(num);
    display(num);
}