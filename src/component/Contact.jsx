import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (

    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact Information */}
          <div className="lg:pr-6">
            <h3 className="text-2xl font-bold mb-5">
              Contact Information
            </h3>

            <p className="text-black dark:text-gray-300 mb-15 leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out using the contact information below or the
              contact form.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-indigo-400 mt-1 mr-4">
                  <FaEnvelope size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-black dark:text-gray-400 break-all">
                    Athersultan789@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-indigo-400 mt-1 mr-4">
                  <FaPhone size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Phone</h4>

                  <a
                    href="https://wa.me/03344390612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    +92 (334) 4390-612
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="text-indigo-600 text-blue-700 dark:text-indigo-400 mt-1 mr-4">
                  <FaMapMarkerAlt size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-blue-700 dark:text-gray-400">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

            </div>

            {/* Follow Me */}
            <div className="mt-10">
              <h4 className="font-bold text-lg mb-4">Follow Me</h4>

              <div className="flex flex-wrap gap-3">
                {["Facebook", "LinkedIn", "GitHub"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-gray-100 dark:bg-gray-700 px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Send Message */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-7">

              <h3 className="text-2xl font-bold mb-5 text-blue-700">
                Send Me a Message
              </h3>

              {submitSuccess && (
                <div className="mb-5 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors ${isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>




  );
};

export default Contact;
