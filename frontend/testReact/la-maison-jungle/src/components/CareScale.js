import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
   	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function handleClick(value, type) {
    let adj = ""
    if (value === 1) {
        adj = "peu"
    } else if (value === 2) {
        adj = "modérement"
    } else {
        adj = "beaucoup"
    }
    const noun = type === 'water' ? 'd\'arrosage.' : 'de lumiere.'
    console.log('Cette plante requiert',  adj, noun);
}

export default CareScale;