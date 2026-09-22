const faqs = [
  {
    question: "Who is NN Digi Solutions for?",
    answer:
      "We primarily work with solopreneurs and small businesses that want to establish or improve their online presence.",
  },
  {
    question: "Do you provide custom websites?",
    answer:
      "Yes. We create websites based on your business, services, goals and requirements rather than using a one-size-fits-all approach.",
  },
  {
    question: "Can you help if I don't understand technology?",
    answer:
      "Absolutely. Our approach is beginner-friendly. We explain the process in simple terms and guide you throughout the project.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on your requirements and the features needed. Contact us for a free consultation and a customised quote.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Yes. We can provide guidance and ongoing support depending on your project and requirements.",
  },
  {
    question: "Do you work only with businesses in Coimbatore?",
    answer:
      "We are initially focusing on Coimbatore and Tamil Nadu, while also being able to work remotely with clients elsewhere.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Have questions? Here are some common ones.
          </p>
        </div>

        {/* FAQ items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-gray-900">
                {faq.question}
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}