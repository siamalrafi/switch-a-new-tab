document.getElementById('btn-sumbit').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-filed');
    const inputFiledValue = inputFiled.value;
    inputFiled.value = '';
    if (inputFiledValue === '111') {
        // pageRedirect();
        window.location.href = "https://www.tutorialrepublic.com/";
    } else {
        'ýour passoword is  incorrect'
    }
})
