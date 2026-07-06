import { ItemCounter} from './shopping_cart/ItemCounter'

interface ItemInCart{
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {productName: 'Nintendo switch 2 ', quantity: 0},
  {productName: 'Pro Controller', quantity: 0},
  {productName: 'Super Smash', quantity: 0},

];
export function FirstStepsApp() {
    
    return (
        <>
        <h1>Carrito de compras</h1>
       {
       itemsInCart.map(({productName, quantity}) => (
         <ItemCounter key={productName}  name={productName} quantity={quantity}/>  
       ))}
   {/* <ItemCounter name="Nintendo switch 2" quantity={36}/>
   <ItemCounter name="Pro Controller" quantity={10}/>
   <ItemCounter name="Super Smash" quantity={0} /> 
   <ItemCounter name="Super mario" quantity={90} />  */}
        </>
     );
}

 