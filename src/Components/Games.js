import React from 'react'
import Game from './Game'

function Games (props) {
    // console.log(props)
    const gamesMap = props.games.map( games => (
        <Game 
            key={games.id}
            saveInfo={props.saveInfo}
            deleteGame={props.deleteGame}
            data={games}
        />
    ))
    
    return (
        <div>
            <h3>Board game or card game? We have 'em all</h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {gamesMap}
            </div>
        </div>
    )
}

export default Games