const projects = [
  {
    category: "3D Printers",
    title: "3D craft and gift",
    description:
      "E-commerce website to sell products online",
  },
  {
    category: "Healthcare",
    title: "Clinic Appointment Website",
    description:
      "A simple online presence for clinics with doctor information and appointment enquiries.",
  },
  {
    category: "Small Business",
    title: "Business Landing Page",
    description:
      "A focused landing page designed to present services and generate customer enquiries.",
  },
  {
    category: "Professional",
    title: "Consultant Portfolio",
    description:
      "A professional personal website for consultants, coaches and independent professionals.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Sample Buisness Porjects | Csutomization available
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
             See What We Can Build for Your Business
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Explore some of the types of websites and digital solutions
            we can create for small businesses.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Image placeholder */}
              <div className="flex h-64 items-center justify-center bg-gray-100">
                <span className="text-sm font-semibold text-gray-400">
                  {project.category} Demo
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Discuss a Similar Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}