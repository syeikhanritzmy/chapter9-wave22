import '../styles/game.css';

export default function Game() {
    return(
        <div id="rock-paper-scissors">
            <div>
                <nav className="d-flex pt-3 ms-4">
                    <a className="me-3" href="../index.html">
                        <img src="../../assets/icons/back.svg" alt="" width="30" height="24"/>
                    </a>
                    <a className="me-3" href="#">
                        <img src="../../assets/icons/rps-logo.svg" alt="" width="30" height="30"/>
                    </a>
                    <div id="title">Rock Paper Scissors</div>
                    <div id="total-score" className='ms-4'>| Your Score: 403</div>
                </nav>
            </div>
       
            <section id="game-rps">
                <div className="container">
                    <div className="row">
                        <div className="col-4 player-1  d-flex justify-content-center">
                            <ul className="player-wrapper">
                                <h5 className="text-center mb-4">Player 1</h5>
                                <li className="rock choice">
                                    <img src="../../assets/images/batu.png" className="image-fluid" alt="Rock"/>
                                </li>
                                <li className="paper choice">
                                    <img src="../../assets/images/kertas.png" className="image-fluid" alt="Paper"/>
                                </li>
                                <li className="scissors choice">
                                    <img src="../../assets/images/gunting.png" className="image-fluid" alt="Scissors"/>
                                </li>
                            </ul>
                        </div>
            
                        <div id="result" className="col-4 d-flex justify-content-center">
                            <div className="game-result">
                                <div id="answer"><h1>VS</h1></div>
                            </div>
                        </div>

                        <div className="col-4 com d-flex justify-content-center">
                            <ul className="computer-wrapper">
                                <h5 className="text-center mb-4">COM</h5>
                                <li id="com_rock" className="rock">
                                    <img src="../../assets/images/batu.png" className="image-fluid"alt="Rock"/>
                                </li>
                                <li id="com_paper" className="paper">
                                    <img src="../../assets/images/kertas.png" className="image-fluid"alt="Paper"/>
                                </li>
                                <li id="com_scissors" className="scissors">
                                    <img src="../../assets/images/gunting.png" className="image-fluid"alt="Scissors"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="reset" className="reset d-flex justify-content-center">
                        <img src="../../assets/icons/refresh.svg" alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-4 player-1  d-flex justify-content-center">
                            <ul className="player-wrapper">
                                <h1 className="text-center mb-4">1</h1>
                            </ul>
                        </div>
            
                        <div className="col-4 d-flex justify-content-center">

                        </div>

                        <div className="col-4 com d-flex justify-content-center">
                            <ul className="computer-wrapper">
                                <h1 className="text-center mb-4">0</h1>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}