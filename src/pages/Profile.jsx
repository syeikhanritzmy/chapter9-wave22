import {useEffect, useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/profile.css'

export default function Profile() {
    const [player, setPlayer] = useState('');
    
    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, '/users/' + 'yusuf');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data.username);
            setPlayer({
                username: data.username,
                email: data.email,
                bio: data.bio,
                score: data.score,
                rank: data.rank,
            })
        });
    }, [])

     
    return(
        <div className='profile-page'>
            <div className='container h-100 d-flex justify-content-center align-items-center pt-4'>
                <div className="card mb-3 h-80">
                    <div className="row g-0">
                        <div className="col-md-5">
                        <img src="../../assets/images/profile.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-7 ps-4">
                        <div className="card-body">
                            <h1 className="card-title">My Profile</h1>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Nickname:</td>
                                        <td>{player.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{player.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Bio:</td>
                                        <td>{player.bio}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Score:</td>
                                        <td>{player.score}</td>
                                    </tr>
                                    <tr>
                                        <td>Global Rank:</td>
                                        <td>{player.rank}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn btn-sm btn-warning'>Edit Profile</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}