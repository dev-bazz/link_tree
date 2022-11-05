import { useState } from "react"





export default function ContactMe() {
        const [firstName, setFirstName] = useState()
        let name;
        function checkSubmitted(e) {
                e.preventDefault()
                console.log(firstName);
                
                
        }

        return (
                <div className="content-container contact-us">
                        <div className="contact-us__msg">
                                <h1 className="contact-us__h1">Contact Me</h1>
                                <p className="contact-us__p">Hi there, contact me to ask me about anything you have in mind.</p>
                        </div>
                        <form action="#" className="form" onSubmit={checkSubmitted}>
                                <div className="form__flex">
                                        <fieldset className="form__name" >
                                                <label data-error="You forgot to add your first name" htmlFor="first_name">First Name</label>
                                                <input className={firstName ? '' : 'error'} value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="first_name" placeholder="Enter your first name" data-erro="Please Enter  Your FIrst Name" />
                                        </fieldset>
                                        <fieldset className="form__name">
                                                <label data-error="No Last Name" htmlFor="last_name">Last Name</label>
                                                <input data-error="You forgot to put your last name" className="error" type="text" id="last_name" placeholder="Enter your last name" />
                                        </fieldset>
                                </div>
                                <fieldset className="email">
                                        <label data-error="Invalid Email" htmlFor="email" className="label-error">Email</label>
                                        <input className="error" type="email" id="email" placeholder="yourname@email.com" />
                                </fieldset>
                                <fieldset className="message">
                                        <label data-error="Please enter a message" className="label-error" htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
                                </fieldset>
                                <fieldset className="check-ox">
                                        <input type="checkbox" name="" id="checkbox" />
                                        <label htmlFor="checkbox">You agree to providing your data to Clement who may contact you.</label>
                                </fieldset>
                                <input type="submit" value="Send message" id="btn_submit" className="form-cta" />
                        </form>
                </div>
        )
}
