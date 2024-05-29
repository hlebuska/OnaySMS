let number;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numberForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // предотвращаем отправку формы

        const numberInput = document.getElementById('numberInput').value;
        number = parseInt(numberInput); // преобразуем введенное значение в число

        myText = document.getElementById('text');

        const now = new Date();

        myText.innerHTML = `ONAY! ALA<br> AT ${now.getDate()}/${now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)} ${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}<br>${number},#${Math.floor(Math.random() * 9000) + 1000},100₸<br>http://qr.tha.kz/${Math.floor(Math.random() * 90000 + 10000)}<br>.`;

        navigator.clipboard.writeText(`ONAY! ALA\n AT ${now.getDate()}/${now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)} ${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}\n${number},#${Math.floor(Math.random() * 9000) + 1000},100₸\nhttp://qr.tha.kz/${Math.floor(Math.random() * 90000 + 10000)}\n.`);
    });
});

