const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality= document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');


calculate = () =>{
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
                amount.value = '';
                guest.value  = '';
                quality.value = '';
                if(tip === 'NaN'){
                    tipAmount.innerHTML = 'Gorjeta R$0 cada';
                    showTipAmount();
                }
                else {
                    tipAmount.innerHTML = 'Gorjeta R$' + tip + ' cada';
                    showTipAmount();
                }
}



showTipAmount = () => {
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}

