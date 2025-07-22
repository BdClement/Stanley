// import { plantList } from '../datas/plantList'
// import '../styles/ShoppingList.css';
// import PlantItem from './PlantItem';

// function ShoppingList({cart, updateCart}) {
//     let categories = []
//     plantList.forEach((plant) => {
//         if (!categories.includes(plant["category"])) {
//             categories.push(plant["category"]);
//         }
//     });
//     return (<div className='shopping-lists'>
//         <ul>
//             {categories.map((category, index) => (
//                 <li key={`${category}-${index}`}>{category}</li>
//             ))}
//         </ul>
//         <ul className='lmj-plant-list'>
//             {plantList.map((plant, index) => (
//                 // coverValue
//                 <div key={plant.id}>
//                     <PlantItem idValue={plant.id} nameValue={plant.name} lightValue={plant.light} waterValue={plant.water}/>
//                     <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
//                 </div>
//                 // <li key={`${plant.id}`} className='lmj-plant-item'>
//                 //     {plant["name"]}
//                 //     {plant["isSpecialOffer"] && <div className='lmj-sales'>Soldes</div>}
//                 // </li>
//             ))}
//         </ul>
//     </div>
//     )
// }

// export default ShoppingList;

import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList