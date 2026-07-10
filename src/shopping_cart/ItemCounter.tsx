import { useState } from "react";



import './itemCounter.css';

export interface Props{
    name: string;
    quantity: number | undefined;
};

// const styleItem: CSSProperties = {
//         display: 'flex',
//         alignItems: 'center',
//         gap: 10,
//         marginTop: 10,
// }
// const styleName: CSSProperties = {
//     width: 150,
// } 


export const ItemCounter = ({name, quantity = 1} : Props) => {
    
    const [count, setCount] = useState(quantity);
    const handleClick = () => {
        setCount(count + 1);
    };

    const handleSubtract = () => {
        if(count === 1) return; // mpide que el balosr sea menor que 0
        setCount(count - 1);
    };
    return (
    <section className="item-row">
    <span className="text"
    style={{color: count === 1 ? 'red' : 'black'}}> {name} </span>
    <button onClick={handleSubtract}> -1 </button>
    <span> {count} </span>
    <button onClick={handleClick}> +1 </button>

    </section>
    );
}