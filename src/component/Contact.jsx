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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out using the contact information below or the
              contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-indigo-400 mt-1 mr-4">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Athersultan789@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-indigo-400 mt-1 mr-4">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  {/* <p className="text-gray-600 dark:text-gray-400">
                    +92 (334) 4390-612
                  </p> */}
                  <a
                    href="https://wa.me/03344390612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    +92 (334) 4390-612
                  </a>

                </div>
              </div>

              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-indigo-400 mt-1 mr-4">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lahore Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {["Facebook", "LinkedIn", "GitHub"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
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
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
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
