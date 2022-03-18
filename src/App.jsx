import React, { useState } from 'react';

const App = () => {
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


    return (
        <>
            <nav>
                <h1>Chirpr</h1>
            </nav>


            {chirps.map(chirp => (
                <>
                    <h3>{chirp.username}</h3>
                    <p>{chirp.message}</p>
                </>
            ))}
        </>
    );
};


export default App;