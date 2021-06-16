import React, { useState, useEffect } from 'react';
import './App.css';
import Photo from './composante/Photo';
import About from './composante/About'
import Cas from './composante/Cas'
import { LanguageContext } from './LanguageContext'


function App() {

  const [langueProtection, setLangueProtection] = useState("Éviter l'infection")
  const [langueCas, setLangueCas] = useState('Statistiques')
  const [langueInfo, setLangueInfo] = useState('Information')
  const [language, setLanguage] = useState('fr')

  // Etat pour savoir si OUI/NON on montre les cas/image/about
  const [cas, setCas] = useState(false)
  const [image, setImage] = useState(true)
  const [about, setAbout] = useState(false)
  
  // Les donnes a montrer
  const [totalCas, setTotalCas] = useState(undefined)
  const [totalDeces, setTotalDeces] = useState(undefined)

  const [time, setTime] = useState('')

  const englishHandler = () => {
    setLanguage('en')
    setLangueProtection('Avoid Infection')
    setLangueCas('Stats')
    setLangueInfo('About')
  }

  const frenchHandler = () => {
    setLanguage('fr')
    setLangueProtection("Éviter l'infection")
    setLangueCas('Statistiques')
    setLangueInfo('Information')
  }

  // Les fronctions qui ouvrent/ferment les pages
  const aboutHandler = () => {
    setImage(false)
    setCas(false)
    setAbout(true)
  }
  const imageHandler = () => {
    setAbout(false)
    setCas(false)
    setImage(true)
  }
  const casHandler = () => {
    setAbout(false)
    setImage(false)
    setCas(true)

  }

  // Fonction qui s'execute quand la page load la premiere fois
  useEffect(() => {
    // On fetch le total de cas
    fetch(apiCasURL)
      .then(reponse => reponse.json())
      .then(resultat => {
        setTime(resultat.data[0].date)
        setTotalCas(resultat.total)
        console.log(resultat)
      })

    // On fetch le total de deces
    fetch(apiDecesURL)
      .then(reponse => reponse.json())
      .then(resultat => {
        setTotalDeces(resultat.total)
        console.log(resultat)
      })
      .catch(() => {
        alert('Error!!')
      })
      setDidFetch(true)
  }, [])

  console.log(time)
  const apiCasURL = "https://api.covid19tracker.ca/cases?province=QC&per_page=&order"
  const apiDecesURL = "https://api.covid19tracker.ca/fatalities?province=QC&per_page=&order"


  // Etat qui verifie si on a bien fetch AVANT d'ouvrir la page web
  const [didFetch, setDidFetch] = useState(false)

  return (
    <LanguageContext.Provider value={language}>
        {didFetch ? (<div className="App">
          <div className="composante">
            {image ? <Photo /> : null}
            {about ? <About /> : null}
            {cas ? <Cas totalCas={totalCas} totalDeces={totalDeces} date={time}/> : null} {/* A MONTRER A EMILY */}
          </div>
          <div className='buttons'>
            <div className="conrad">
              <button className="bouts" onClick={imageHandler}>{langueProtection}</button>
              <button className="bouts" onClick={casHandler}>{langueCas}</button>
              <button className="bouts" onClick={aboutHandler}>{langueInfo}</button>
            </div>
            <button onClick={frenchHandler}>Francais</button>
            <button onClick={englishHandler}>English</button>
          </div>

        </div>) : <h1>Loading...</h1>}
    </LanguageContext.Provider>
  );
}

export default App;
