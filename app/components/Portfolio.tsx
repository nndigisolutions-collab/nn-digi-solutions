const projects = [
  {
    category: "3D Printers",
    title: "3D craft and gift",
    description: "E-commerce website to sell products online",
    image: "/images/jocraftixscreen.png",
    websiteUrl: "https://jocraftix.com/",
  },
  {
    category: "Healthcare",
    title: "Clinic Appointment Website",
    description: "A simple clinic website with appointment enquiries.",
    image: "/images/clinic.png",
    websiteUrl: "https://your-clinic-demo.com",
  },
  {
    category: "Small Business",
    title: "Business Landing Page",
    description: "A landing page for business services.",
    image: "/images/business.png",
    websiteUrl: "https://your-business-demo.com",
  },
  {
    category: "Professional",
    title: "Consultant Portfolio",
    description: "A website for consultants and professionals.",
    image: "/images/consultant.png",
    websiteUrl: "https://your-consultant-demo.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title}>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`${project.title} website preview`}
                className="h-64 w-full rounded-xl object-cover object-top"
              />
            </a>

            <h3 className="mt-4 text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-2">{project.description}</p>

            <a
              href="#contact"
              className="mt-4 inline-block text-blue-600"
            >
              Discuss a Similar Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}