import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
})

vi.mock('./shopping_cart/ItemCounter', () => ({    
    ItemCounter: (pront: unknown) => mockItemCounter(pront),
}));

// vi.mock('./shopping_cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//     <div 
//     data-testid="ItemCounter" 
//     name={props.name} 
//     quantity={props.quantity}/>
// ), // simulacion de un componente
// }));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container }  = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot();

        screen.debug(); // imprime 
    });

    test('should render the correct number of itemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        
        expect(itemCounters.length).toBe(3);

        // screen.debug(); // imprime 
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo switch 2',
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 5,
        });
    });
});