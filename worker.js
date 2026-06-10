export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Смотреть Рекламу</title>
    
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #131418;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            width: 100%;
            max-width: 400px;
        }

        /* Стили для твоей фотографии */
        .promo-image {
            width: 100%;
            max-width: 280px; /* Ограничил максимальную ширину, чтобы смотрелось аккуратно */
            height: auto;
            border-radius: 20px; /* Скругленные углы для красоты */
            margin-bottom: 24px; /* Отступ снизу до кнопки */
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Легкая тень под фото */
        }

        /* Красивая кнопка */
        .ad-button {
            background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
            border: none;
            border-radius: 16px;
            color: white;
            font-size: 18px;
            font-weight: 700;
            padding: 20px 40px;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0, 114, 255, 0.4);
            transition: transform 0.2s, box-shadow 0.2s;
            width: 100%;
            letter-spacing: 0.5px;
        }

        .ad-button:active {
            transform: scale(0.96);
            box-shadow: 0 4px 12px rgba(0, 114, 255, 0.2);
        }
    </style>
</head>
<body>

    <div class="container">
        <img src="https://iimg.su/i/ZHPfYZ" alt="Promo" class="promo-image">

        <button class="ad-button" id="watchAdBtn">
            Смотреть рекламу
        </button>
    </div>

    <script>
        const button = document.getElementById('watchAdBtn');

        button.addEventListener('click', () => {
            console.log('Клик по кнопке рекламы');
            
            if (typeof show_xxxxx === 'function') { 
                // Логика Monetag
            } else {
                alert('Реклама загружается или скрипт Monetag еще не подключен!');
            }
        });
    </script>

</body>
</html>
    `;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
