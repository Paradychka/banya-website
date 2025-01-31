document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримуємо дані з форми
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Створюємо об'єкт з даними
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Відправляємо дані на сервер за допомогою Fetch API
    fetch('https://example.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Обробка відповіді від сервера
        if (data.success) {
            alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
        } else {
            alert('Виникла помилка. Спробуйте ще раз.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Виникла помилка. Спробуйте ще раз.');
    });
});

function initMap() {
    var location = { lat: 48.324807, lng: 23.197804 }; // Вставте свої координати
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
});
