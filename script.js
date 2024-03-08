const templCreate = `
        <input class="input-pozdrav" type="text" placeholder="Введи текст поздравления">
        <button id="create-link__btn" class="create-link-btn">Создать ссылку</button>
        <a class="done-link" href="">Ссылка</a>

        <button id="copy-link-btn" class="create-link-btn">Копировать ссылку</button>
`;


if (!location.href.includes('?')) {
    document.querySelector('.container').innerHTML = templCreate;
    const btnCreate = document.querySelector('#create-link__btn');
    btnCreate.onclick = () => {
        document.querySelector('.done-link').innerHTML = `${window.location.href}?text=${document.querySelector('input').value}`;
        document.querySelector('.done-link').href = `${window.location.href}?text=${document.querySelector('input').value}`;
    }
    document.querySelector('#copy-link-btn').onclick = () => {
        navigator.clipboard.writeText(`${window.location.href}?text=${document.querySelector('input').value}`).then(function() {
            console.log('Текст успешно скопирован в буфер обмена');
        }, function(err) {
            console.error('Произошла ошибка при копировании текста: ', err);
        });
    }
} else {
    document.querySelector('.container').innerHTML = `
        <button class="back-btn">Создать новую ссылку</button> 
        <h2>${decodeURIComponent(window.location.href.split('?text=')[1])}</h2>
    `;
    let h2 = document.querySelector('h2');
    h2.innerHTML = h2.innerText.split('').map((letters, i) => `<span class="text" style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg)">${letters}</span>`).join('');
    document.querySelector('.back-btn').onclick = () => {
        window.location.href = window.location.href.split('?')[0];
    }
}