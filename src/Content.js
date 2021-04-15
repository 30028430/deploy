import React, { Component } from "react";
import Game from "./data.json";
import './contents.css';

const games = Game.map(
    (Game) => 
    {
        return(
            <div className="col-4" key={Game.id}>
                
                    <div className="card shadow-sm">
                        <img src={Game.image} alt={Game.game} />


                        <div class="nzs">
                        <div class="para">
                            
                        <div className="card-body">

                            <p className="card-text">{Game.description}</p>
                                <small className="text-muted">{Game.price}</small>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        );
    }
);

class Content extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">

                {games}

            </div>
            </div>
            </div>
        );
    }
}

export default Content;
