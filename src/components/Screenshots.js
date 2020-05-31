import React from 'react';
import {Link} from 'react-router-dom'
import './Game.css';

class Game extends React.Component {
    

    render () {
        console.log(this.props.location.data.screenshots)
        return (
            <div>
                 
               <Link className="return" to="/"> Retour à la liste des jeux </Link>
            
               <div className="screenshots">{this.props.location.data.screenshots.map(screenshot => (
                    <div key={screenshot.id}>                                                                      
                          <img className="screenshot" src={screenshot.image}/>
                    </div>))} 
              </div>
              
            </div>
        )
    }
}

export default Game