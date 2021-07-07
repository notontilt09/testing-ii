import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('renders ball count div', () => {
        const { getByText } = render(<Display />);
        const balls = getByText(/balls/i);
        expect(balls).toBeInTheDocument();
    })

    it('renders strike count div', () => {
        const { getByText } = render(<Display />);
        const strikes = getByText(/strikes/i);
        expect(strikes).toBeInTheDocument();
    })
})