const refs = {
    input: document.getElementById('validation-input'),
};

const inputDataLength = Number(refs.input.dataset.length);

refs.input.addEventListener('input', onInputBlur);
refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if(refs.input.value.length >= inputDataLength){
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');

    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    }
};
