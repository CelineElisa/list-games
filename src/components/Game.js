import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

class Game extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <h2>{this.props.game.name}</h2>
        <img className="image" src={this.props.game.background_image} />
        <div className="info">
          <div className="dateEtNote">
            <p>Date de sortie : {this.props.game.released}</p>
            <p className="note"><span className="yellow">★</span>  Note : {this.props.game.rating}</p>{" "}
          </div>
          <div className="genreCont">
            <p>Genre :</p>
            <div className="genres">
              {this.props.game.genres.map((genre) => (
                <p key={genre.id} className="genre">
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons">
        
          
            <Link className ="lien"
              to={{
                pathname: `/jeu/screenshots/${this.props.game.id}`,
                data: {
                  screenshots: this.props.game.short_screenshots,
                },
              }}
            >
              📷 Voir les images
            </Link>
          
        
        <button className ="suppr" onClick={() => this.props.removeGame(this.props.game.id)}>
        ⚠️ Supprimer ce jeu
        </button>
        </div>
      </div>
      
    );
  }
}

export default Game;
