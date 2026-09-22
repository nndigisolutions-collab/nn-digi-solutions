import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
           <Logo dark />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Beginner-friendly digital solutions for solopreneurs and
              small businesses looking to build their online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <a href="#services" className="hover:text-white">
                Services
              </a>

              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#portfolio" className="hover:text-white">
                Portfolio
              </a>

              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Get In Touch</h3>

            <a
              href="mailto:nndigisolutions@gmail.com"
              className="mt-4 inline-block text-sm text-gray-400 hover:text-white"
            >
              nndigisolutions@gmail.com
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NN Digi Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}