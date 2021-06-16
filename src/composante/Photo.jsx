import React, { useState} from 'react'
import a from '../photo/a.jpg'
import b from '../photo/b.jpg'
import c from '../photo/c.jpg'
import d from '../photo/d.jpg'
import e from '../photo/e.jpg'
//import f from '../photo/f.jpg'
import './Photo.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';




const Photo = () => {

    const listPhoto = [a, b, c, d, e] //ajouter f
    const [compteur, setCompteur] = useState(0)
    const droite = () => {
        if (compteur === 4) { //ajouter 5      
            setCompteur(0)

        } else {
            setCompteur(compteur + 1)
        }
    }
    const gauche = () => {
        if (compteur === 0) {
            setCompteur(4) //ajouter 5
        } else {
            setCompteur(compteur - 1)
        }
    }

    return (
        <div>
            <div className='image'>
                <img className='images' src={listPhoto[compteur]} alt='OOPS, not working!' />
            </div>
            <div className='lesButtons'>
                <FaChevronLeft className='chevron' onClick={gauche} />
                <FaChevronRight className='chevron' onClick={droite} />
            </div>
        </div>

    )
}

export default Photo
