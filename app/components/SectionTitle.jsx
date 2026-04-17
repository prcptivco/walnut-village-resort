const SectionTitle = ({ subtitle, title, light = false, center = false }) => (
  <div className={`mb-12 md:mb-20 ${center ? "text-center" : ""}`}>
    <span
      className={`block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${
        light ? "text-white/70" : "text-[#8D6E63]"
      }`}
    >
      {subtitle}
    </span>
    <h2
      className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight ${
        light ? "text-white" : "text-[#2C1810]"
      }`}
    >
      {title}
    </h2>
  </div>
);

export default SectionTitle;
