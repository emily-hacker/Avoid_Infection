import React,{useContext} from 'react'
import {LanguageContext} from '../LanguageContext'


const About = () => {
    const language = useContext(LanguageContext)
    const Francais = () =>{
    
        return(
        <div>
        <h1>
            Information Sur Cette Application
        </h1>
        <h2><u>Version de l'application</u></h2>
        1.0
        <h2>_____________________</h2>
        <h2><u>langage de programmation</u></h2>
        Cette application est codée dans le 
        langage de programmation "react.js"
        </div>
    )}
    
    const Anglais = () =>{
        return(
            <div>
            <h1>
            About This App
        </h1>
        <h2><u>App version</u></h2>
        <h4>1.0</h4>
        <h2>_____________________</h2>
        <h2><u>programming language</u></h2>
        <h4>This application is coded in 
        the "react.js" programming language</h4>
            </div>
        )}
        
    return (
        <div>
        {language === 'fr' ? <Francais/>:<Anglais/>}
        </div>
    )
}

export default About

