import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('sanity test', () => {
     expect(3+3).not.toBe(7)
     expect(3+3).toBe(6)
})

test('Render Form to DOM', () => {
     render(<ContactForm />)
})

test('Can use First Name input field', () => {
     render(<ContactForm />)

     const firstNameInput = screen.getByLabelText(/first name/i)

     const lastNameInput = screen.getByLabelText(/last name/i)

     const emailInput = screen.getByLabelText(/email/i)

     const messageInput = screen.getByLabelText(/message/i)



     userEvent.type(firstNameInput, 'Trenten')
     userEvent.type(lastNameInput, 'Grede')
     userEvent.type(emailInput, 'test@test.com')
     userEvent.type(messageInput, 'test message here 123 test test test')


     expect(firstNameInput).toHaveValue('Trenten')
     expect(lastNameInput).toHaveValue('Grede')
     expect(emailInput).toHaveValue('test@test.com')
     expect(messageInput).toHaveValue('test message here 123 test test test')
     
     const button = screen.getByRole('button', {name: /submit/i})

     act(() => {
          userEvent.click(button)
     })

     
})