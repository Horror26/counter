const countValue = document.getElementById('counter');
const inc = () =>{
    let value = parseInt(countValue.innerText);
    value = value+1;
    countValue.innerText = value;
};

function dec(){
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText = value;
};