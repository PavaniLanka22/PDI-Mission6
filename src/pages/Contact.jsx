const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Whether
            you have a question about products,
            pricing, partnerships, or anything
            else, our team is ready to answer all
            your questions.
          </p>
        </div>

        <div className="contact-card">
          <h2>Send Message</h2>

          <form>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea placeholder="Your Message"></textarea>

            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;