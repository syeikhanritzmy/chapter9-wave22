import {useEffect, useState} from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";

export default function ProfileEdit() {
    const [player, setPlayer] = useState({
        username: '',
        email: '',
        bio: '',
        score: '',
        rank: '',
    });

    const pathname = window.location.pathname
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    const userId = getLastItem(pathname)
    
    useEffect(() => {
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

    function handleSubmit(e){
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, 'users/' + 'yusuf'), {
          username: e.target.username.value,
          email: e.target.email.value,
          bio: e.target.bio.value,
          score: player.score,
          rank: player.rank,
        });
      }


    const handleChange = (event) => {
        setPlayer({
          ...player,
          [event.target.name]: event.target.value
        });
      }

    return(
        <div className="profile-page">
             <div className='container h-100 d-flex justify-content-center align-items-center pt-4'>
                <div className="card mb-3 h-80">
                    <div className="row g-0">
                        <div className="col-md-5">
                        <img src="../../assets/images/profile.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-7 ps-4">
                        <div className="card-body">
                            <h1 className="card-title mb-4">Edit Profile</h1>
                            <form onSubmit={e => {handleSubmit(e)}}>
                                <div className="mb-3 row">
                                    <label htmlFor="nickname" className="col-sm-3 col-form-label" >Nickname</label>
                                    <div className="col-sm-9">
                                    <input type="text" className="form-control" name="username" value={player.username} onChange={handleChange} id="nickname"/>
                                </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                    <input type="email" className="form-control" value={player.email} onChange={handleChange} id="email" name="email"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="bio" className="col-sm-3 col-form-label">Bio</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={player.bio} onChange={handleChange} id="bio" name="bio"></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="total-score" className="col-sm-3 col-form-label">Total Score</label>
                                    <div className="col-sm-9">
                                        <input type="text" readOnly className="form-control-plaintext" name="score" id="total-score" value={ player.score } onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="global-rank" className="col-sm-3 col-form-label">Global Rank</label>
                                    <div className="col-sm-9">
                                        <input type="text" readOnly className="form-control-plaintext" name="rank" id="global-rank" value={ player.rank } onChange={handleChange}/>
                                    </div>
                                </div>
                                <button className='btn btn-success' type="submit">Save Profile</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}