const games = require('../games.json')
let id = games[games.length - 1].id + 1

module.exports = {
    getGames: (req, res) => {
        res.status(200).send(games)
    },
    addGame: (req, res) => {
        const {name, players, description, image} = req.body
        const newGame = {id, name, players, description, image}
        games.push(newGame)
        id++
        res.status(200).send(games)
    },
    saveInfo: (req, res) => {
        const {game_id} = req.params
        const {newName, newPlayers, newDescription, newImage} = req.body
        console.log(req.params, req.body);
        const index = games.findIndex(e=> e.id === +game_id)

        if (index === -1){
            return res.status(404).send("Game not found")
        }
        games[index] = {
            id: +game_id,
            name: newName || games[index].name,
            players: newPlayers || games[index].players,
            description: newDescription || games[index].description,
            image: newImage || games[index].image
        }
        res.status(200).send(games)
    },
    deleteGame: (req, res) => {
        const {game_id} = req.params
        const index = games.findIndex(e=> e.id === +game_id)

        if (index === -1){
            return res.status(404).send("Game not found")
        }
        games.splice(index, 1)
        res.status(200).send(games)
    }
}