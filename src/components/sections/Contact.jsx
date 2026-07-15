"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputStyles =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none shadow-sm transition duration-300 ease-out focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 focus:shadow-[0_0_0_8px_rgba(56,189,248,0.12)]";

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message. Please try again.");
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again later.");
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-slate-50 text-slate-900 border-slate-200/70" id="contact">
      <Container>
        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something meaningful together."
                description="Whether you have a project in mind or want to connect about opportunities, I’d love to hear from you."
                align="left"
                className="mx-0 max-w-none"
                eyebrowClassName="text-slate-700"
                titleClassName="text-slate-900"
                descriptionClassName="text-slate-600"
              />

              <div className="mt-8 space-y-4 text-sm text-slate-600">
                <a href="mailto:okekefelix51@gmail.com" className="block transition duration-300 ease-out hover:text-slate-900">
                  Email: okekefelix51@gmail.com
                </a>
                <a href="https://github.com/OkekeKachi" target="_blank" rel="noreferrer" className="block transition duration-300 ease-out hover:text-slate-900">
                  GitHub: github.com/OkekeKachi
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block transition duration-300 ease-out hover:text-slate-900">
                  LinkedIn: Coming Soon
                </a>
                <p className="text-slate-600">Location: Abuja, Nigeria</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            >
              <Card className="border border-slate-200 bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-900">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputStyles}
                        placeholder="Your name"
                      />
                      {errors.name ? (
                        <p id="name-error" className="text-sm text-rose-400" role="alert">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputStyles}
                        placeholder="you@example.com"
                      />
                      {errors.email ? (
                        <p id="email-error" className="text-sm text-rose-400" role="alert">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-900">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={inputStyles}
                      placeholder="What would you like to talk about?"
                    />
                    {errors.subject ? (
                      <p id="subject-error" className="text-sm text-rose-400" role="alert">
                        {errors.subject}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={inputStyles}
                      placeholder="Tell me a little about your idea or project."
                    />
                    {errors.message ? (
                      <p id="message-error" className="text-sm text-rose-400" role="alert">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {submitted ? (
                      <p className="text-sm text-emerald-400" role="status" aria-live="polite">
                        Thanks! Your message has been sent successfully. I&apos;ll get back to you soon.
                      </p>
                    ) : null}
                  </div>
                  {submitError ? (
                    <p className="text-sm text-rose-400" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
