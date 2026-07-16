import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('itemCounter', () => {

    test('should render with default values', () => {
        const name = "Control de Nintendo";

        render(<ItemCounter name={name} quantity={undefined}  />)

        
        expect(screen.getByText(name)).toBeDefined(); // buscar el valor "name" que no este definido
        // expect(screen.getByText(name)).not.toBeNull();// buscar el balor que no se nulo
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={"test item"} quantity={1} />)

        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd)

        expect(screen.getByText('2')).toBeDefined();

    });

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name={"test item"} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    })

    test('should not decreasd cound when -1 button is pressed and quantity is 1', () => {
        const quantity = 1;
        render(<ItemCounter name={"test item"} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    })

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name); 

        expect(itemText.style.color).toBe('red');
    })

    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name); 

        expect(itemText.style.color).toBe('black');
    })
});
