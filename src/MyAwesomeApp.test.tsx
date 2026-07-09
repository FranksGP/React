import { describe, test, expect,} from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {

    test('should render firstName and LastName', () => {
        render(<MyAwesomeApp />);
        
        screen.debug();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toBe('Fernando');
    });
});