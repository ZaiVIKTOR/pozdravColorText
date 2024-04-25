const templCreate = `
        
`;


if (!location.href.includes('?')) {
    document.querySelector('.container').innerHTML = `
        <h2>Вам выдали бан</h2>
    `;
        let h2 = document.querySelector('h2');
    h2.innerHTML = h2.innerText.split('').map((letters, i) => `<span class="text" style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg)">${letters}</span>`).join('');
} else {
    document.querySelector('.container').innerHTML = `
        <button class="back-btn">Создать новую ссылку</button> 
        <h2>Вам выдали бан</h2>
    `;
    let h2 = document.querySelector('h2');
    h2.innerHTML = h2.innerText.split('').map((letters, i) => `<span class="text" style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg)">${letters}</span>`).join('');
    document.querySelector('.back-btn').onclick = () => {
        window.location.href = window.location.href.split('?')[0];
    }
}
