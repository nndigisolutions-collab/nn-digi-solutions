type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white shadow-sm">
        NN
      </div>

      <div>
        <div
          className={`text-lg font-bold leading-tight ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          NN <span className="text-blue-600">Digi Solutions</span>
        </div>

        <div
          className={`text-[10px] font-medium tracking-wider ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          DIGITAL • SIMPLE • PRACTICAL
        </div>
      </div>
    </a>
  );
}