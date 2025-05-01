export function TechIcon({ name, label }) {
  return (
    <div className="flex flex-col items-center w-20">
      <i className={`${name}`}></i>
      <span className="text-sm text-[#ccd6f6] mt-1 text-center">{label}</span>
    </div>
    // eslint-disable-next-line prettier/prettier
  );
}
