const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 transition-colors duration-300">
      <div className="max-w-md text-center">
        {/* Grid Pattern */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl transition-colors duration-300 ${
                i % 2 === 0
                  ? "bg-indigo-500/30 dark:bg-indigo-400/40 animate-pulse"
                  : "bg-indigo-400/20 dark:bg-indigo-300/20"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-4 text-base-content">{title}</h2>
        <p className="text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
