import {
  Globe,
  CalendarCheck,
  Bot,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* LEFT - Content */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Digital Solutions for Small Businesses
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Enter into
            <span className="block text-blue-600">
              Digital Space.
            </span>
            <span className="block">
              Level Up Your Business.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            We help solopreneurs and small businesses build their online
            presence with websites, digital marketing and practical AI
            solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Free Consultation
            </a>

            <a
              href="#services"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-center font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded-full bg-gray-100 px-4 py-2">
              Websites
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              Booking
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              SEO & GEO
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              AI Solutions
            </span>
          </div>
        </div>

        {/* RIGHT - Visual */}
        <div className="relative mx-auto w-full max-w-lg">
          
          {/* Main browser card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl shadow-blue-100">
            
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />

              <div className="ml-3 h-7 flex-1 rounded-lg bg-gray-50" />
            </div>

            {/* Dashboard content */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Business Overview</p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Your Digital Presence
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Globe size={22} />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">Website</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    Online
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-blue-100">
                    <div className="h-2 w-4/5 rounded-full bg-blue-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">Bookings</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    Growing
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-blue-100">
                    <div className="h-2 w-3/5 rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>

              {/* Service cards */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4">
                  <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                    <CalendarCheck size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Appointments</p>
                    <p className="text-sm font-semibold text-gray-900">
                      Easy Booking
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4">
                  <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                    <Bot size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">AI</p>
                    <p className="text-sm font-semibold text-gray-900">
                      Smart Support
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-blue-600 p-5 text-white">
                <div>
                  <p className="text-sm font-semibold">
                    Ready to go digital?
                  </p>
                  <p className="mt-1 text-xs text-blue-100">
                    Start with a free consultation.
                  </p>
                </div>

                <div className="rounded-full bg-white/20 p-2">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-xl">
            <p className="text-xs text-gray-400">
              Built for
            </p>

            <p className="mt-1 text-sm font-bold text-gray-900">
              Solopreneurs & Small Businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}