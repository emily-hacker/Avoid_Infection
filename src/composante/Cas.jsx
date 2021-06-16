import React, { useContext } from 'react'

import { LanguageContext } from '../LanguageContext'


const Cas = (props) => {

    const language = useContext(LanguageContext)

    const Francais = () => {
        return (
            <div>
                <h1>Cas au Quebec</h1>
                <h2>Dernière mise à jour de la situation au Québec: {props.date}</h2>
                <h2>Total de Cas: {props.totalCas}</h2>
                <h2>Total de Deces: {props.totalDeces}</h2>

            </div>
        )
    }
    const Anglais = () => {
        return (
            <div>
                <h1>Cases in Quebec</h1>
                <h2>Last Update of the situation in Quebec: {props.date}</h2>
                <h2>Total Cases: {props.totalCas}</h2>
                <h2>Total Deaths: {props.totalDeces}</h2>

            </div>
        )
    }
    return (
        <div>

            {language === 'fr' ? <Francais /> : <Anglais />}
        </div>
    )
}




export default Cas