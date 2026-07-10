import { describe, test, expect,} from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {

    test('should render firstName and LastName', () => {
        const { container } = render(<MyAwesomeApp />);
        // screen.debug();
        // console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');


        // console.log(h1);
        expect(h1?.innerHTML).toContain('Fernando');// toBe sirve para busacar datos primitivos
        expect(h3?.innerHTML).toContain('Herrera');
    });

    test('should render firstName and LastName - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug(); // devuelve la estrutura del DOW

        // const h1 = screen.getByRole('heading',{level: 1}); //busca el h1
        
        const h1 = screen.getByTestId('first-name-title'); //busca el h1 por el data-testid
        expect(h1.innerHTML).toContain('Fernando');
    
    });

    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    }); 
});