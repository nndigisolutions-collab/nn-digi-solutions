import {
  MessageCircle,
  Lightbulb,
  Rocket,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    title: "Simple Communication",
    description:
      "We explain technology in simple language so you always know what is being built and why.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "We focus on useful digital solutions that solve real business problems rather than adding unnecessary features.",
  },
  {
    icon: Rocket,
    title: "Start Small, Grow Later",
    description:
      "You don't need a complicated system from day one. Start with what your business needs today and expand over time.",
  },
  {
    icon: Handshake,
    title: "Business-Focused Approach",
    description:
      "We look beyond technology and understand how the solution can support your customers, operations and growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why NN Digi Solutions
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Your business doesn't need more technology.
              <span className="block text-blue-600">
                It needs the right technology.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We believe going digital should be simple. Our goal is to help
              solopreneurs and small businesses build a useful online presence
              without getting overwhelmed by technical complexity.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Whether you need your first website, an appointment booking
              system, digital marketing or a practical AI solution, we help
              you take the next step at your own pace.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right side */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}