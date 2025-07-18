// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css';

function ShoppingList() {
    let categories = []
    plantList.forEach((plant) => {
        if (!categories.includes(plant["category"])) {
            categories.push(plant["category"]);
        }
    });
    return (<div className='shopping-lists'>
        <ul>
            {categories.map((category, index) => (
                <li key={`${category}-${index}`}>{category}</li>
            ))}
        </ul>
        <ul className='lmj-plant-list'>
            {plantList.map((plant, index) => (
                <li key={`${plant["name"]}-${index}`} className='lmj-plant-item'>
                    {plant["name"]}
                    {plant["isSpecialOffer"] && <div className='lmj-sales'>Soldes</div>}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList;