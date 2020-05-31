import React from 'react'
import Game from './Game'

import './Game.css';

class GameList extends React.Component {
    
    state = {
        tabGames : [],
        showBestsOnly : false,
        button : "Voir les mieux notés"
      };

      getGames = () => {
            const url = "https://wild-games.herokuapp.com/api/v1";
             fetch(url) 
             .then((res) => res.json())
             .then((res) => this.setState({ tabGames : res }))
      }

      removeGame = (id) =>{
        let tabTemp = this.state.tabGames
        const index = tabTemp.findIndex(game => game.id === parseInt(id))
        const remove = window.confirm("Etes-vous sûr de vouloir supprimer ce jeu ?")
        if (remove) {
            tabTemp.splice(index, 1)
            this.setState({ tabGames : tabTemp})
        }
      }

      showBests = () => {
        this.setState({showBestsOnly : !this.state.showBestsOnly})
        if (this.state.showBestsOnly === true){
            this.setState({button : "Voir les mieux notés"})
        } else {
            this.setState({button : "Voir tous les jeux"})
        }
      }
 
      componentDidMount() {
             this.getGames();     
       }
    

    render () {
        return (
            <div>
                <h1> Les meilleurs jeux </h1>

                <button className="bestGames" onClick={this.showBests}>{this.state.button}</button>

                <div >
                { this.state.showBestsOnly ? (
                     <div  className="gameList">
                        {this.state.tabGames.filter(game => (game.rating >  4.5)).map(game => (
                        <div className="gameCont" key={game.id} >                                                                      
                         <Game game={game} removeGame={this.removeGame}/>
                         </div>))}
                    </div>
                ):(
                    <div className="gameList">
                        {this.state.tabGames.map(game => (
                        <div className="gameCont" key={game.id}>                                                                      
                        <Game game={game} removeGame={this.removeGame}/>
                        </div>))}
                 </div>
                )
                        }
                </div>
            </div>
        )
    }
}

export default GameList