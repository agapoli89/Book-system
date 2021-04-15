import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'; 

test('renders Logowanie', () => {
    render(<Login />);
    expect(screen.getByText(/logowanie/i)).toBeInTheDocument();
});

test('changes email value', () => {
    const utils = render(<Login />);
    const emailInput = utils.getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'agapoli'} });
    expect(emailInput.value).toBe('agapoli');
})

