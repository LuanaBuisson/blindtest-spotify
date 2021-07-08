/*global swal*/

import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';

const apiToken = 'BQDmQJ1Kmv68TyQJDOZbExGirGkH9nMl_Z5IHQOhS5MEiKS6CIBNroWnX4wwqa5rLGsl0GnI6up5vYm5GrqEAfsLKvHMJkEBrXZEnoDpIvVGyE4M2USLli3hnY2vDWJsK758brhRc0FJc1EfU93wGt6UQVG9flAen9RKTXwnrgZh';


function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

const App = () => {
  const [text, setText] = useState('');
  const [tracks, setTracks] = useState([]);
  const [songsLoaded, setSongsLoaded] = useState(false);
  // useEffect(() => {setText("Bonjour");}, []);
  useEffect(() => {  fetch('https://api.spotify.com/v1/me/tracks', {
                  method: 'GET',
                  headers: {
                   Authorization: 'Bearer ' + apiToken,
                  },
                })
                  .then(response => response.json())
                  .then((data) => {
                    console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data);
                    setTracks(data.items);
                    setSongsLoaded(true);

                  })
                  }

    ,[]);
  if (!songsLoaded){
    return (<div className="App">
              <img src={loading} className="App-logo" alt="logo"/>
           </div>);
          //<img src={loading} className="App-logo" alt="loading"/>
  }// else{
  //   return
  // }
  console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", songsLoaded);

// for(var i = 0; {tracks.length}; i++){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title"> The Blindtest Excursion ! </h1>
      </header>
      <div className="App-images">
        <p>Nous avons chargé {tracks.length} musiques !</p>

        <p>La 5ème musique est {tracks[4].track.name} de {tracks[4].track.artists[0].name}.</p>

      </div>
      <div className="App-buttons">
      </div>
    </div>


  );
}

export default App;
