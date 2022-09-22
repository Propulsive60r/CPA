require('dotenv').config() //подключаем для работы с окружением

const express = require('express')
const PORT = process.env.PORT || 5000 //забираем переменную с окружения .env
const app = express()

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))