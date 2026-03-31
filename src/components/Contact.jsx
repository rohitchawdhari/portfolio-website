import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lki5lig",
      "template_j7k90eb",
      form.current,
      "TktFhlKkQucFHc-qD"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message ❌");
    });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb"
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-md"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 rounded-xl border"
          >

            <div className="grid grid-cols-2 gap-3 mb-3">

              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full px-3 py-2 rounded-lg"
                required
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="w-full px-3 py-2 rounded-lg"
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-lg mb-3"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-3 py-2 rounded-lg mb-3"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-lg mb-4"
              required
            />

            <button
              type="submit"
              className="w-full py-3 text-white bg-orange-500 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;