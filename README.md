<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1iFLNIfYgVDiYypIbx196at43ckcvjPS-

## Run Locally

**Prerequisites:** Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env.local` file in the root of the project and fill in your secret keys. You can use the following template:
   ```env
   # Ключ для AI-ассистента на карте (Google Gemini)
   GEMINI_API_KEY="ВАШ_КЛЮЧ_GEMINI_API"

   # Учетные данные Telegram-бота для отправки заявок
   TELEGRAM_BOT_TOKEN="ВАШ_ТОКЕН_TELEGRAM_БОТА"
   TELEGRAM_CHAT_ID="ВАШ_ID_TELEGRAM_ЧАТА"

   # Учетные данные Google Sheets API для сохранения заявок
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nВАШ_ПРИВАТНЫЙ_КЛЮЧ\n-----END PRIVATE KEY-----\n"
   GOOGLE_CLIENT_EMAIL="ВАШ_КЛИЕНТСКИЙ_EMAIL@developer.gserviceaccount.com"
   GOOGLE_SHEET_ID="ВАШ_ID_ГУГЛ_ТАБЛИЦЫ"
   ```
3. Run the app:
   `npm run dev`
