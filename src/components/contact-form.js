import * as React from "react"

const ContactForm = () => (
    <>
    <div id="contact-form" className="">
        <p className="mt-5 mb-5">Some intro text about the Contact Form. Still need to wire the form up to accept submissions.</p>
        {/* Form */}
        {/*  <!-- Bootstrap 5 starter form --> */}
        <form id="contactForm">
        {/*  <!-- Name input --> */}
            <div className="mb-3">
                <label className="form-label" for="name">Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name" />
            </div>
        {/*  <!-- Email address input --> */}
            <div className="mb-3">
                <label className="form-label" for="emailAddress">Email Address</label>
                <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
            </div>
        {/*  <!-- Message input --> */}
            <div className="mb-3">
                <label className="form-label" for="message">Message</label>
                <textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
            </div>
        {/*  <!-- Form submit button --> */}
            <div className="">
                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
        </form>
       
  
        {/* Form */}
        
    </div>
    </>
    
  );
  
  export default ContactForm;