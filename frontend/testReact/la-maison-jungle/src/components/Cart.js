// import { useState } from 'react'
// import '../styles/Cart.css'

// function Cart({cart, updateCart}) {
// 	const monsteraPrice = 8
// 	const [isOpen, setIsOpen] = useState(true)

// 	return isOpen ? (
// 		<div className='lmj-cart'>
// 			<button
// 				className='lmj-cart-toggle-button'
// 				onClick={() => setIsOpen(false)}
// 			>
// 				Fermer
// 			</button>
//             <button
//                 onClick={() => updateCart(0)}
//             >
//                 Vider
//             </button>
// 			<h2>Panier</h2>
// 			<div>Monstera : {monsteraPrice}€</div>
// 			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
// 			<h3>Total : {monsteraPrice * cart}€</h3>
// 		</div>
// 	) : (
// 		<div className='lmj-cart-closed'>
// 			<button
// 				className='lmj-cart-toggle-button'
// 				onClick={() => setIsOpen(true)}
// 			>
// 				Ouvrir le Panier
// 			</button>
// 		</div>
// 	)
// }

// export default Cart;

import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart