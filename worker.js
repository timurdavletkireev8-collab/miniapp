export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Смотреть Рекламу</title>

    <script src="https://ad.gigapub.tech/script?id=6822"></script>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: sans-serif;
            background-color: #131418;
            color: #ffffff;
        }

        .promo-image {
            width: 100%;
            height: auto;
            display: block;
        }

        .container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .ad-button {
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            border: none;
            border-radius: 16px;
            color: white;
            font-size: 18px;
            padding: 20px;
            width: 100%;
            max-width: 400px;
            margin-top: 20px;
            cursor: pointer;
        }

        .ad-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    </style>
</head>
<body>

    <img
        src="https://i.postimg.cc/NjYkYpjC/photo-2026-06-10-08-57-02.jpg"
        alt="Promo"
        class="promo-image"
    >

    <div class="container">
        <button class="ad-button" id="watchAdBtn">
            Смотреть рекламу
        </button>
    </div>

    <script>
        const btn = document.getElementById('watchAdBtn');

        btn.addEventListener('click', async () => {
            if (typeof window.showGiga !== 'function') {
                alert('Рекламный скрипт не загрузился');
                return;
            }

            btn.disabled = true;
            btn.textContent = 'Загрузка рекламы...';

            try {
                await window.showGiga();

                alert('Спасибо за просмотр рекламы!');

                // Здесь можно выполнить выдачу награды
                // например запрос к API:
                // await fetch('/reward', { method: 'POST' });

            } catch (error) {
                console.error(error);
                alert('Не удалось показать рекламу');
            }

            btn.disabled = false;
            btn.textContent = 'Смотреть рекламу';
        });
    </script>

</body>
</html>
    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  },
};
