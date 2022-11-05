
import { useState, useEffect } from "react"





export default function ContactMe() {

        const initialState = {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
        }
        const [formValue, setFormValue] = useState(initialState)
        const [formErrors, setFormErrors] = useState({})
        function checkSubmitted(e) {
                e.preventDefault()
                setFormErrors(validateForm(formValue))


        }
        function validateForm(values) {
                console.log(values)
                const errors = {};
                if (!values.firstName) {
                        errors.firstName = `You forgot to add your first name`
                }
                if (!values.lastName) {
                        errors.lastName = `You forgot to add your last name`
                }
                if (!values.email) {
                        errors.email = `You forgot to add your email`
                }
                if (!values.message) {
                        errors.message = `You forgot to add a message`
                }
                return errors
        }
        function handleInput(e) {
                const { name, value } = e.target;
                setFormValue((prev) => ({ ...prev, [name]: value }))
                setFormErrors({ ...formErrors, [name]: '' });
        }
        useEffect(() => {
                console.log('Clement')
        }, [formValue, formErrors]);

        return (
                <div className="content-container contact-us">
                        <div className="contact-us__msg">
                                <h1 className="contact-us__h1">Contact Me</h1>
                                <p className="contact-us__p">Hi there, contact me to ask me about anything you have in mind.</p>
                        </div>
                        {/* <pre>{JSON.stringify(formValue, undefined, 2)}</pre> */}
                        <form action="#" className="form" onSubmit={checkSubmitted}>
                                <div className="form__flex">
                                        <fieldset className="form__name" >
                                                <label data-error="You forgot to add your first name" htmlFor="first_name">First Name</label>
                                                <input className={formErrors.firstName ? 'error400' : ''} name="firstName" value={formValue.firstName} onChange={handleInput} type="text" id="first_name" placeholder="Enter your first name" data-erro="Please Enter  Your FIrst Name" />
                                                <p className="label-error">{formErrors.firstName}</p>
                                        </fieldset>
                                        <fieldset className="form__name">
                                                <label data-error="No Last Name" htmlFor="last_name">Last Name</label>
                                                <input className={formErrors.lastName ? 'error400' : ''} name="lastName" value={formValue.lastName} onChange={handleInput} data-error="You forgot to put your last name" type="text" id="last_name" placeholder="Enter your last name" />
                                                <p className="label-error">{formErrors.lastName}</p>

                                        </fieldset>
                                </div>
                                <fieldset className="email">
                                        <label htmlFor="email" >Email</label>
                                        <input className={formErrors.email ? 'error400' : 'error'} name="email" value={formValue.email} onChange={handleInput} type="email" id="email" placeholder="yourname@email.com" />
                                        <p className="label-error">{formErrors.email}</p>

                                </fieldset>
                                <fieldset className="message">
                                        <label data-error="Please enter a message" htmlFor="message">Message</label>
                                        <textarea className={formErrors.message ? 'error400' : ''} name="message" value={formValue.message} onChange={handleInput} id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
                                        <p className="label-error">{formErrors.message}</p>

                                </fieldset>
                                <fieldset className="check-ox">
                                        <input type="checkbox" id="checkbox" required />
                                        <label htmlFor="checkbox">You agree to providing your data to Clement who may contact you.</label>
                                </fieldset>
                                <input type="submit" value="Send message" id="btn_submit" className="form-cta" />
                        </form>
                </div>
        )
}
