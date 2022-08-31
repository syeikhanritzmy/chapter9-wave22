// import useState and useEffect from react hook
import React, { useState, useEffect } from 'react';

import '../styles/game.css';

export default function Game() {
    const [score, setScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [play, setPlay] = useState(true);
    const [result, setResult] = useState('VS');
    const [pick, setPick] = useState({
        rock: '',
        paper: '',
        scissors: '',
        com_rock: '',
        com_paper: '',
        com_scissors: '',
    });


    useEffect(() => {
        console.log(score, comScore);
        if (score === 2) {
            console.log('you win');
            handleReset();
            setGameOver(true);
        } else if (comScore === 2) {
            console.log('you lose');
            handleReset();
            setGameOver(true);
        }
    }, [score, comScore])

    // function to get random computer choice between rock, paper, scissors
    const getComChoice = () => {
        const choices = ['com_rock', 'com_paper', 'com_scissors'];
        const random = Math.floor(Math.random() * 3);
        return choices[random];
    }

    // function to reset set play to true and pick to empty object
    const handleReset = () => {
        setGameOver(false);
        setPlay(true);
        setPick({
            rock: '',
            paper: '',
            scissors: '',
            com_rock: '',
            com_paper: '',
            com_scissors: '',
        });

        if(score === 2 || comScore === 2){
            setScore(0);
            setComScore(0);
        }
    }


    // function to handle click and add player score
    const handleClick = (choice) => {
        if(play == true && gameOver == false) {
            setPlay(false);
            // call getComChoice function to get computer choice
            const comChoice = getComChoice();
            setPick({
                ...pick,
                [choice]: 'picked',
                [comChoice]:'picked'
            });
            // check if player choice is equal to computer choice
            if (`com_${choice}` === comChoice) {
                setResult('TIE');
                // if equal, do nothing
            } else if (choice === 'rock' && comChoice === 'com_scissors') {
                setResult('WIN');
                // if player choice is rock and computer choice is scissors, add 1 to score
                setScore(score + 1);
            } else if (choice === 'paper' && comChoice === 'com_rock') {
                setResult('WIN');
                // if player choice is paper and computer choice is rock, add 1 to score
                setScore(score + 1);
            }
            else if (choice === 'scissors' && comChoice === 'com_paper') {
                setResult('WIN');
                // if player choice is scissors and computer choice is paper, add 1 to score
                setScore(score + 1);
            } else {
                setResult('LOSE');
                // if player choice is not equal to computer choice, add 1 to computer score
                setComScore(comScore + 1);
            }


        }

    }

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
                                <li className={`rock choice ${pick.rock}`} onClick={() => handleClick('rock')}>
                                    <img src="../../assets/images/batu.png" className="image-fluid" alt="Rock"/>
                                </li>
                                <li className={`paper choice ${pick.paper}`} onClick={() => handleClick('paper')}>
                                    <img src="../../assets/images/kertas.png" className="image-fluid" alt="Paper"/>
                                </li>
                                <li className={`scissors choice ${pick.scissors}`} onClick={() => handleClick('scissors')}>
                                    <img src="../../assets/images/gunting.png" className="image-fluid" alt="Scissors"/>
                                </li>
                            </ul>
                        </div>
                        <div id="result" className="col-4 d-flex justify-content-center">
                            <div className="game-result">
                                <div id="answer"><h1>{result}</h1></div>
                            </div>
                        </div>
                        <div className="col-4 com d-flex justify-content-center">
                            <ul className="computer-wrapper">
                                <h5 className="text-center mb-4">COM</h5>
                                <li id="com_rock" className={`rock ${pick.com_rock}`}>
                                    <img src="../../assets/images/batu.png" className="image-fluid"alt="Rock"/>
                                </li>
                                <li id="com_paper" className={`paper ${pick.com_paper}`}>
                                    <img src="../../assets/images/kertas.png" className="image-fluid"alt="Paper"/>
                                </li>
                                <li id="com_scissors" className={`scissors ${pick.com_scissors}`}>
                                    <img src="../../assets/images/gunting.png" className="image-fluid"alt="Scissors"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="reset" className="reset d-flex justify-content-center" onClick={handleReset}>
                        <img src="../../assets/icons/refresh.svg" alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-4 player-1  d-flex justify-content-center">
                            <ul className="player-wrapper">
                                <h1 className="text-center mb-4">{score}</h1>
                            </ul>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                        </div>
                        <div className="col-4 com d-flex justify-content-center">
                            <ul className="computer-wrapper">
                                <h1 className="text-center mb-4">{comScore}</h1>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}