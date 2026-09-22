"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mljdbvpy";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Let&apos;s take your business online.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Tell us about your business and what you need. We&apos;ll
              understand your requirements and help you find the right
              digital solution.
            </p>

            <div className="mt-8 rounded-2xl bg-gray-50 p-6">
              <p className="text-sm text-gray-500">
                Email us
              </p>

              <a
                href="mailto:nndigisolutions@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-gray-900 hover:text-blue-600"
              >
                nndigisolutions@gmail.com
              </a>

              <p className="mt-4 text-sm text-gray-600">
                Free initial consultation available.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Thank You!
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-600">
                  Your enquiry has been received successfully.
                  We&apos;ll get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Send Another Enquiry
                </button>

              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Request a Free Consultation
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Share a few details and we&apos;ll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Business */}
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Business Name
                    </label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your business name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      What do you need?
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Website Creation">
                        Website Creation
                      </option>

                      <option value="Appointment Booking Website">
                        Appointment Booking Website
                      </option>

                      <option value="Branding Website">
                        Branding Website
                      </option>

                      <option value="Landing Page">
                        Landing Page
                      </option>

                      <option value="SEO & GEO">
                        SEO & GEO
                      </option>

                      <option value="Meta Ads">
                        Meta Ads
                      </option>

                      <option value="AI Consultancy">
                        AI Consultancy
                      </option>

                      <option value="AI Chatbot">
                        AI Chatbot
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Tell us about your requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us a little about your business and what you need..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "Sending..."
                      : "Request Free Consultation"}
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}