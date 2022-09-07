import {useEffect, useState} from "react";
import { getDatabase, ref, onValue, orderByValue, limitToLast } from "firebase/database";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/rank.css'

export default function Rank() {
    const [player, setPlayer] = useState('');
    const pathname = window.location.pathname
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    const userId = getLastItem(pathname)
    
    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, '/users/' + userId, orderByValue('score'), limitToLast(5));
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data.username);
            setPlayer({
                username: data.username,
                score: data.score,
            })
        });
    }, [])
     
    return(
        <div className='rank-page bg-black'>
            <section id="top-scores" className="top-scores" >
                <div className="background-overlay"></div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 pt-4">
                        <h2 className="h1 display-4 text-white text-center">ROCK PAPER SCISSORS</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sequi quae ipsum unde consequatur fugiat exercitationem vel ipsa commodi? Velit.</p>
                        <div className="d-block text-center">
                        <a href="#" className="btn btn-lg btn-block btn-warning  my-4">PLAY NOW</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="grid-container">
                            
                        <div className="grid-item item1 mb-4">
                        <h2 className="h1 text-white text-center">TOP SCORES</h2>
                            <p className="text-center">This top score from various games provided on this polatform</p>
                            <div className="card bg-dark mt-4">
                            <div className="card-body">
                                <div className="d-flex">
                                <div className="profil-image me-4 mb-4">
                                    <img src="" alt=""/>
                                    <div className="back-shadow bg-warning"></div>
                                </div>

                                <h4 className="card-title mt-3 text-warning">Evan Lathi<span className="h6 text-muted"><br/>PC Gamer</span></h4>
                                <a href="#" className="twitter-icon ms-auto mt-3"></a>
                                </div>
                                <p className="card-text">"One of my gaming highlights of the year."</p>
                                <div className="text-muted">
                                June 18, 2021
                                </div>
                            </div>
                            </div>
                            <div className="card bg-dark mt-4">
                            <div className="card-body">
                                <div className="d-flex">
                                <div className="profil-image me-4 mb-4">
                                    <img src="" alt=""/>
                                    <div className="back-shadow bg-warning"></div>
                                </div>

                                <h4 className="card-title mt-3 text-warning">Evan Lathi<span className="h6 text-muted"><br/>PC Gamer</span></h4>
                                <a href="#" className="twitter-icon ms-auto mt-3"></a>
                                </div>
                                <p className="card-text">"One of my gaming highlights of the year."</p>
                                <div className="text-muted">
                                June 18, 2021
                                </div>
                            </div>
                            </div>
                            <div className="card bg-dark mt-4">
                            <div className="card-body">
                                <div className="d-flex">
                                <div className="profil-image me-4 mb-4">
                                    <img src="" alt=""/>
                                    <div className="back-shadow bg-warning"></div>
                                </div>

                                <h4 className="card-title mt-3 text-warning">Evan Lathi<span className="h6 text-muted"><br/>PC Gamer</span></h4>
                                <a href="#" className="twitter-icon ms-auto mt-3"></a>
                                </div>
                                <p className="card-text">"One of my gaming highlights of the year."</p>
                                <div className="text-muted">
                                June 18, 2021
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}