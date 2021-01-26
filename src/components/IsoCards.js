import React from 'react';
import ReactDOM from "react-dom";

const IsoCards = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src="./images/eye.png" alt="image1" />
                    <h3>L'oeil</h3>
                </div>
                <div className="content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis, voluptates sit laborum officia, nemo?</p>
                </div>
            </div>
            
            <div className="card">
                <div className="imgBx">
                    <img src="images/skull.png" alt="image2" />
                    <h3>La tête</h3>
                </div>
                <div className="content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis, voluptates sit laborum officia.</p>
                </div>
            </div>
        
            <div className="card">
                <div className="imgBx">
                    <img src="images/heart.png" alt="image3" />
                    <h3>Le Coeur</h3>
                </div>
                <div className="content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis.</p>
                </div>
            </div>
        </div>
    );
};

export default IsoCards;