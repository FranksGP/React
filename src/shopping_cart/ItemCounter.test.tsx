import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { ItemCounter } from "./ItemCounter";

test('itemCounter', () => {

    test('should render with default values', () => {

        render(<ItemCounter name="Test item" />)

        screen.debug();

    });
});
