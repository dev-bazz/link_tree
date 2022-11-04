

export default function ContactMe() {
        return (
                <div className="content-container contact-us">
                        <div className="contact-us__msg">
                                <h1 className="contact-us__h1">Contact Me</h1>
                                <p className="contact-us__p">Hi there, contact me to ask me about anything you have in mind.</p>
                        </div>
                        <form action="#" className="form">
                                <div className="form__flex">
                                        <div className="form__name">
                                                <label htmlFor="first-name">First Name</label>
                                                <input type="text" id="first-name" />
                                        </div>
                                        <div className="form__name">
                                                <label htmlFor="last-name">Last Name</label>
                                                <input type="text" id="last-name" />
                                        </div>
                                </div>

                        </form>
                </div>
        )
}
