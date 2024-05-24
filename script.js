let number;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numberForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // предотвращаем отправку формы

        const numberInput = document.getElementById('numberInput').value;
        number = parseInt(numberInput); // преобразуем введенное значение в число

        myText = document.getElementById('text');

        const now = new Date();

        myText.innerHTML = `ONAY! ALA<br> AT ${now.getDate()}/${now.getMonth() + 1} ${now.getHours()}:${now.getMinutes()}<br>${number},#1265,100₸<br>http://qr.tha.kz/47601<br>.`;
    });
});

