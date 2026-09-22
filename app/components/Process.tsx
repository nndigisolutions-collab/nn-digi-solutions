const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Share your business, goals and the digital solution you are looking for.",
  },
  {
    number: "02",
    title: "We Understand Your Needs",
    description:
      "We discuss your requirements and suggest a practical solution that fits your business.",
  },
  {
    number: "03",
    title: "We Build Your Solution",
    description:
      "We design and develop your website or digital solution with a focus on simplicity and usability.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Once everything is ready, we help you launch and guide you on the next steps.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            How We Work
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Simple process. No technical confusion.
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            From your first conversation to launch, we keep the process
            simple and transparent.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-200 bg-white p-7"
            >
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}