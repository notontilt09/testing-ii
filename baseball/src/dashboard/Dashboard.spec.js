import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

const mockFn = jest.fn();

describe('</Dashboard />', () => {
    it('renders dashboard buttons', () => {
        const { getByText } = render(<Dashboard />)
        expect(getByText(/ball/i)).toBeInTheDocument();
        expect(getByText(/strike/i)).toBeInTheDocument();
        expect(getByText(/foul/i)).toBeInTheDocument();
        expect(getByText(/hit/i)).toBeInTheDocument();
    }) 

    it('fires ball function when ball is clicked', () => {
        const { getByText } = render(<Dashboard ball={mockFn} />)
        const ballBtn = getByText(/ball/i);
        fireEvent.click(ballBtn);
        // not sure why this isn't working
        expect(mockFn).toHaveBeenCalled();
    })

    it('fires strike function when strike is clicked', () => {
        const { getByText } = render(<Dashboard strike={mockFn} />)
        const strikeBtn = getByText(/strike/i);
        fireEvent.click(strikeBtn);
        // not sure why this isn't working
        expect(mockFn).toHaveBeenCalled();
    })
    it('fires hit function when hit is clicked', () => {
        const { getByText } = render(<Dashboard hit={mockFn} />)
        const hitBtn = getByText(/hit/i);
        fireEvent.click(hitBtn);
        // not sure why this isn't working
        expect(mockFn).toHaveBeenCalled();
    })
    it('fires foul function when foul is clicked', () => {
        const { getByText } = render(<Dashboard foul={mockFn} />)
        const foulBtn = getByText(/foul/i);
        fireEvent.click(foulBtn);
        // not sure why this isn't working
        expect(mockFn).toHaveBeenCalled();
    })
})