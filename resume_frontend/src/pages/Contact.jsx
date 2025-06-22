import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="contact-form shadow-sm">
              <h2 className="text-center">Get in Touch</h2>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control custom-input" 
                        placeholder="First Name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control custom-input" 
                        placeholder="Last Name" 
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control custom-input" 
                    placeholder="Email Address" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    className="form-control custom-input" 
                    rows="5" 
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group text-center">
                  <button 
                    className="btn btn-primary" 
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;