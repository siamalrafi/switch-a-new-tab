document.getElementById('btn-sumbit').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-filed');
    const inputFiledValue = inputFiled.value;
    const inputPass = document.getElementById('input-pass');
    const inputPassValue = inputPass.value;
    inputFiled.value = '';
    if (inputPassValue === 'ranaahmed@gmail.com' && inputFiledValue === '111') {
        // This is the link of html page
        window.location.href = "new.html";
    }
    else if (inputFiledValue !== '111') {
        // show the alert 
        alert('Your passoword is  incorrect')
    }

})
