"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitting(true);
    emailjs
      .send(
        "service_yecx2nj",
        "template_2435k9y",
        {
          title: "New Contact Form Submission",
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          to_email: "hnafdsn380095@gmail.com",
        },
        "q82fgki41ySSPbrda"
      )
      .then(
        () => {
          setSuccessMessage(
            "Thank you, your message was sent. We'll contact you shortly."
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrorMessage("Something went wrong. Try again.");
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-brand-light/20"
    >
      {successMessage && (
        <div
          role="status"
          aria-live="polite"
          className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md"
        >
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div
          role="status"
          aria-live="polite"
          className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md"
        >
          {errorMessage}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-dark">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full h-10 px-3 rounded-md border border-brand-light/30 bg-transparent text-sm text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-brand-dark"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+261 34 ..."
            className="w-full h-10 px-3 rounded-md border border-brand-light/30 bg-transparent text-sm text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-dark">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full h-10 px-3 rounded-md border border-brand-light/30 bg-transparent text-sm text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-brand-dark"
        >
          Service Type
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-brand-light/30 bg-transparent text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent appearance-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="regular">Regular Maintenance</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move">Move-In / Move-Out</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute right-3 top-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-brand-dark/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-brand-dark"
        >
          Message / Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your home (size, specific needs)..."
          className="w-full p-3 rounded-md border border-brand-light/30 bg-transparent text-sm text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Quote"}
      </Button>
    </form>
  );
}
