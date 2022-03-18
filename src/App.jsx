import React, { useState } from 'react';
import ChirprContainer from './components/ChirprContainer';
const App = () => {
    const [username, setUsername] = useState("");
    const [message, newMessage] = useState("");
    const [chirps, setChirps] = useState([
        {
            id: 1,
            username: "KarmicWonder",
            message: "Elon Musk gains 200 lbs"
        },
        {
            id: 2,
            username: "PolynesianSauce4",
             message: "Chicken Nugget shaped asteroid hits Antarctic"
        },
        {
            id: 3,
            username: "KimK",
             message: "Kanye West arrested for murder of Pete Davidson"
        },
    ]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMessageChange = (e) => newMessage(e.target.value);
    const handleChirprSubmit = (e) => {
       e.preventDefault();
       
        const newChirp = {
            id: 4
            username: username,
            message: message
        };

        setChirps([...chirps, newChirp]);
    }
    return (
        <>
            <nav>
                <h1>Chirpr</h1>
            </nav>

            <form action="">
                <input type="text" value={username} onChange={handleUsernameChange}/>
                <textarea value={message} onChange={handleMessageChange} cols="30" rows="10"></textarea>
                <button onClick={handleSubmit}></button>
            </form>

            {chirps.map(chirp => <ChirprContainer key={chirp.id} username={chirp.username} message={chirp.message}/>)}
        </>
    );
}; 


export default App;