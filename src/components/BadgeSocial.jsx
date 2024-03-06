/* eslint-disable react/prop-types */
const BadgeSocial = ({ className, href, children }) => {
  return (
    <a 
      className={`${className} flex items-center space-x-0 border-white/40 bg-white/5 transition-all hover:scale-105 hover:bg-white/20 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5`} 
      target="_blank" 
      href={href} 
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default BadgeSocial;
