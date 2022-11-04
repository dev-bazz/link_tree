

export default function ContactMe() {
        return (
                <div className="content-container contact-us">
                        <div className="contact-us__msg">
                                <h1 className="contact-us__h1">Contact Me</h1>
                                <p className="contact-us__p">Hi there, contact me to ask me about anything you have in mind.</p>
                        </div>
                        <form action="#" className="form">
                                <div className="form__flex">
                                        <fieldset className="form__name" >
                                                <label htmlFor="first_name">First Name</label>
                                                <input type="text" id="first_name" placeholder="Enter your first name" data-erro="Please Enter  Your FIrst Name" required/>
                                        </fieldset>
                                        <fieldset className="form__name">
                                                <label htmlFor="last_name">Last Name</label>
                                                <input type="text" id="last_name" placeholder="Enter your last name" required />
                                        </fieldset>
                                </div>
                                <fieldset className="email">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="yourname@email.com" required />
                                </fieldset>
                                <fieldset className="message">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                                </fieldset>
                                <fieldset className="check-ox">
                                        <input type="checkbox" name="" id="checkbox" />
                                        <label htmlFor="">You agree to providing your data to Clement who may contact you.</label>
                                </fieldset>
                                <input type="submit" value="Send message" className="form-cta" />
                        </form>
                </div>
        )
}
