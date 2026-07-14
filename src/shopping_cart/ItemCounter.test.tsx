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
});
