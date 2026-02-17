import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ loading: false });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to state names
    if (name === "user_name") {
      setFormData((prev) => ({ ...prev, name: value }));
      if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
    } else if (name === "user_email") {
      setFormData((prev) => ({ ...prev, email: value }));
      if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
    } else if (name === "message") {
      setFormData((prev) => ({ ...prev, message: value }));
      if (errors.message) setErrors((prev) => ({ ...prev, message: null }));
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setFormStatus({ loading: true });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        showToast("Message sent successfully! I'll get back to you soon.", "success");
      }
    } catch (error) {
      console.error("Email error:", error);
      showToast("Failed to send message. Please try again.", "error");
    } finally {
      setFormStatus({ loading: false });
    }
  };

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/YashKh-09",
      handle: "github.com/YashKh-09",
      icon: <FaGithub />,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yashkh.layer",
      handle: "@yashkh.layer",
      icon: <FaInstagram />,
    },
    {
      platform: "Email",
      url: "mailto:yashkh.dev@gmail.com",
      handle: "yashkh.dev@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section id="contact" className="py-20 md:py-24 border-t border-[#3a3a3a]">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-[#b8a58b] opacity-90">
              Contact_
            </h2>
            <div className="w-12 md:w-16 h-px bg-[#b8a58b] opacity-50 mt-4" />
          </div>

          {/* Simple Intro */}
          <div className="max-w-2xl mb-10">
            <p className="text-[clamp(1rem,3vw,1.2rem)] text-[#a0a0a0] leading-relaxed">
              Want to collaborate, ask a question, or just say hi? Drop a
              message or find me on social media.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-[#a0a0a0] mb-2"
                  >
                    Name <span className="text-[#b8a58b]">*</span>
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border p-3 text-[#f0f0f0] text-sm transition-colors focus:outline-none ${
                      errors.name
                        ? "border-[#b8a58b]"
                        : "border-[#3a3a3a] focus:border-[#6d8a7d]"
                    }`}
                    placeholder="Your name"
                    disabled={formStatus.loading}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#b8a58b] mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-[#a0a0a0] mb-2"
                  >
                    Email <span className="text-[#b8a58b]">*</span>
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border p-3 text-[#f0f0f0] text-sm transition-colors focus:outline-none ${
                      errors.email
                        ? "border-[#b8a58b]"
                        : "border-[#3a3a3a] focus:border-[#6d8a7d]"
                    }`}
                    placeholder="your.email@example.com"
                    disabled={formStatus.loading}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#b8a58b] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#a0a0a0] mb-2"
                  >
                    Message <span className="text-[#b8a58b]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-transparent border p-3 text-[#f0f0f0] text-sm transition-colors focus:outline-none resize-vertical ${
                      errors.message
                        ? "border-[#b8a58b]"
                        : "border-[#3a3a3a] focus:border-[#6d8a7d]"
                    }`}
                    placeholder="Tell me about your project or just say hi..."
                    disabled={formStatus.loading}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#b8a58b] mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`px-6 py-3 border text-sm font-medium tracking-wide transition-all duration-300 w-full sm:w-auto ${
                    formStatus.loading
                      ? "opacity-50 cursor-not-allowed border-[#3a3a3a] text-[#a0a0a0]"
                      : "border-[#b8a58b] text-[#b8a58b] hover:bg-[#b8a58b] hover:text-[#0a0a0a]"
                  }`}
                >
                  {formStatus.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">◌</span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            </div>

            {/* Direct Links */}
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-['Archivo'] text-lg md:text-xl font-bold mb-6 text-[#b8a58b] opacity-80">
                Find Me Online_
              </h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => (
                  <div key={index} className="group">
                    <span className="text-sm text-[#a0a0a0] block mb-1">
                      {link.platform}
                    </span>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md text-[#f0f0f0] hover:text-[#6d8a7d] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[#b8a58b] opacity-50 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                      {link.handle}
                    </a>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="border-t border-[#3a3a3a] pt-6">
                <p className="text-sm italic text-[#a0a0a0] leading-relaxed">
                  I'm always open to new connections and conversations. Feel
                  free to reach out anytime!
                </p>

                {/* Availability */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6d8a7d] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6d8a7d]" />
                  </span>
                  <span className="text-xs text-[#a0a0a0]">
                    Usually responds within a day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;