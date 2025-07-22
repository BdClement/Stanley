import { useState } from 'react'
import '../styles/Footer.css'

// un input pour récupérer le mail de l'utilisateur, en appliquant la méthode de composant contrôlé.
// La syntaxe du state que nous avons utilisée dans ce chapitre pour  inputValue   et  setInputValue   
// qui utilise useState est d'ailleurs déjà écrite dans la base de code ;

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer' onClick={() => blur(inputValue)}>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
		</footer>
	)
}

function blur(mail) {
    if (!mail.includes('@')) {
        console.log({mail}, ' does not contain @')
    }
}

export default Footer;