export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Смотреть Рекламу</title>
    
    <!-- ПОДКЛЮЧЕНИЕ MONETAG (Замениxxxxx на свой ID зоны позже) -->
    <!-- <script src="https://alwingulla.com/act/files/tag.min.js?z=xxxxxxx" data-zone="xxxxxxx" async defer></script> -->

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
            text-align: center;
            padding: 20px;
            width: 100%;
            max-width: 400px;
        }

        /* Красивая кнопка по центру */
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
        <button class="ad-button" id="watchAdBtn">
            Смотреть рекламу
        </button>
    </div>

    <script>
        const button = document.getElementById('watchAdBtn');

        button.addEventListener('click', () => {
            console.log('Клик по кнопке рекламы');
            
            // Логика вызова рекламы Monetag (In-App Request)
            if (typeof show_xxxxx === 'function') { 
                // Вместо xxxxx будет функция твоей зоны, когда вставишь скрипт
                // show_xxxxx().then(() => { ... });
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
