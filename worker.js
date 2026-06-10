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
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: sans-serif; background-color: #131418; color: #ffffff; }

        .promo-image {
            width: 100%;       /* На всю ширину */
            height: auto;
            display: block;    /* Убирает лишние отступы снизу */
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
        }
    </style>
</head>
<body>
    <img src="https://iimg.su/i/ZHPfYZ" alt="Promo" class="promo-image">
    
    <div class="container">
        <button class="ad-button" id="watchAdBtn">Смотреть рекламу</button>
    </div>

    <script>
        document.getElementById('watchAdBtn').addEventListener('click', () => {
            if (typeof show_xxxxx === 'function') { 
                show_xxxxx(); 
            } else {
                alert('Реклама недоступна');
            }
        });
    </script>
</body>
</html>
    `;

    return new Response(html, { headers: { 'content-type': 'text/html;charset=UTF-8' }});
  },
};
