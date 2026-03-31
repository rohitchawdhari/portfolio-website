import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";

const Contact = ({ darkMode }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lki5lig",
      "template_yc6e3tf",
      form.current,
      "TktFhIKkQucFHc-qD"
    )
    .then(
      () => {
        alert("Message Sent Successfully ✅");
      },
      () => {
        alert("Failed to send message ❌");
      }
    );

    e.target.reset();
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

        {/* Heading */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937"
            }}
          >
            Get In{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Touch
            </span>
          </h2>

          <p className="text-gray-500">
            Let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-5 sm:p-6 rounded-xl border"
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