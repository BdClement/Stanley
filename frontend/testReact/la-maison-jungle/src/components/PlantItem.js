import CareScale from './CareScale';

function PlantItem(props) {
    const name = props.name;
    const price = props.price
    // coverValue
    return (<div className='lmj-plant-item'>
        {name}
        <span className='lmj-plant-item-price'>{price}€</span>
        <CareScale careType='water' scaleValue={props.water}/>
        <CareScale careType='light' scaleValue={props.light}/>
    </div>)
}

export default PlantItem;