const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4444

app.use(express.json())

app.get('/api/games', ctrl.getGames)
app.post('/api/games', ctrl.addGame)
app.put('/api/games/:game_id', ctrl.saveInfo)
app.delete('/api/games/:game_id', ctrl.deleteGame)



app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))