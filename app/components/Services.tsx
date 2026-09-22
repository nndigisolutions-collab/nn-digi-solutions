import {
  Globe,
  CalendarCheck,
  Palette,
  PanelsTopLeft,
  Search,
  Megaphone,
  BrainCircuit,
  Bot,
} from "lucide-react";

const services = [
  {
    title: "Website Creation",
    description:
      "Professional, mobile-friendly websites that give your business a strong online presence.",
    icon: Globe,
  },
  {
    title: "Appointment Booking",
    description:
      "Make it easy for customers to discover your services and book appointments online.",
    icon: CalendarCheck,
  },
  {
    title: "Branding Websites",
    description:
      "Build a consistent and professional digital identity for your business.",
    icon: Palette,
  },
  {
    title: "Landing Pages",
    description:
      "Focused landing pages designed for products, services, campaigns and lead generation.",
    icon: PanelsTopLeft,
  },
  {
    title: "SEO & GEO",
    description:
      "Improve your visibility in search engines and AI-powered search experiences.",
    icon: Search,
  },
  {
    title: "Meta Ads",
    description:
      "Reach potential customers through targeted Facebook and Instagram advertising.",
    icon: Megaphone,
  },
  {
    title: "AI Consultancy",
    description:
      "Find practical ways to use AI to save time, improve workflows and grow your business.",
    icon: BrainCircuit,
  },
  {
    title: "AI Chatbots",
    description:
      "Build useful AI chatbots for customer enquiries, support and lead generation.",
    icon: Bot,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Everything You Need to Go Digital
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Practical digital solutions designed to help your business
            establish, improve and grow its online presence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Get Quote
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}