import {useEffect, useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/profile.css'

export default function Profile() {
    const [player, setPlayer] = useState('');
    const [enableEdit, setEnableEdit] = useState(false);
    const pathname = window.location.pathname
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    const userId = getLastItem(pathname)

    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              if (uid === userId){ setEnableEdit(true)}
            } 
        });
        const db = getDatabase();
        const starCountRef = ref(db, '/users/' + userId);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
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
                                </tbody>
                            </table>
                            {enableEdit ? <Link className="btn btn-warning" to={ `/players/edit/${userId}` }>Edit Profile</Link> : ''}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}