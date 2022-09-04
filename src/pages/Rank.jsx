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


    // function perbandinganSkor(key, order = 'asc') {

    //     return function innerSort(a, b) {

    //         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {

    //         // property doesn't exist on either object

    //         return 0;

    //         }

    //         const varA = (typeof a[key] === 'string')

    //         ? a[key].toUpperCase() : a[key];

    //         const varB = (typeof b[key] === 'string')

    //         ? b[key].toUpperCase() : b[key];

    //         let comparison = 0;

    //         if (varA > varB) {

    //         comparison = 1;

    //         } else if (varA < varB) {

    //         comparison = -1;

    //         }

    //         return (

    //         (order === 'desc') ? (comparison * -1) : comparison
    //         );
    //     };
    //  }
     
    return(
        <div className='rank-page'>
            <div className='container h-100 d-flex justify-content-center align-items-center pt-4'>
                <div className="card mb-3 h-80">
                    <div className="row g-0">
                        <div className="col-md-5">
                        </div>
                        <div className="col-md-7 ps-4">
                        <div className="card-body">
                            <h1 className="card-title">Rank Leaderboard</h1>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Nickname:</td>
                                        <td>{player.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Score:</td>
                                        <td>{player.score}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}