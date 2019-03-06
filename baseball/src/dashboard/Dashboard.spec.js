import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('</Dashboard />', () => {
    it('renders dashboard buttons', () => {
        const { getByText } = render(<Dashboard />)
        expect(getByText(/ball/i)).toBeInTheDocument();
        expect(getByText(/strike/i)).toBeInTheDocument();
        expect(getByText(/out/i)).toBeInTheDocument();
        expect(getByText(/hit/i)).toBeInTheDocument();
    }) 
})