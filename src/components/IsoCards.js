import React from 'react';

const IsoCards = () => {


    return (
        <div className="container">    
            <div className="card-container">
                <div className="card hover">
                    <div className="imgBx">
                        <img src={"./../../img/eye.svg"} alt="illustration d'un oeil" />
                        <h3>L'oeil</h3>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis, voluptates sit laborum officia, nemo?</p>
                    </div>
                </div>
                
                <div className="card hover">
                    <div className="imgBx">
                        <img src={"img/skull.svg"} alt="illustration d'un crane mexicain" />
                        <h3>La tête</h3>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis, voluptates sit laborum officia.</p>
                    </div>
                </div>
            
                <div className="card hover">
                    <div className="imgBx">
                        <img src={"img/heart.svg"} alt="illustration d'un coeur" />
                        <h3>Le Coeur</h3>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam fugiat quia hic quo reprehenderit soluta iure neque deleniti aliquam debitis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsoCards;