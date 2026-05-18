import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../data";

const navItems = [
  { urdu: "سرورق", english: "HOME", path: "/" },
  { urdu: "تعارف", english: "ABOUT", path: "/about" },
  { urdu: "تصانیف", english: "BOOKS", path: "/books" },
  { urdu: "کالم", english: "COLUMNS", path: "/columns" },
  { urdu: "تازہ کلام", english: "POETRY", path: "/poetry" },
  { urdu: "یادگاریں", english: "ALBUM", path: "/gallery" },
];

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#5A2C16] border-b-4 border-[#3D1D0E] shadow-2xl">
      <div className="w-full overflow-x-auto select-none no-scrollbar">
        {/* Horizontal flex row layout - RTL ordered */}
        <div className="flex flex-row-reverse w-full min-w-[580px] md:min-w-0 divide-x divide-x-reverse divide-[#3D1C0B]/80 border-x border-[#3D1C0B]/80">
          
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`flex-1 py-4 md:py-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-[#7A3D1E] text-[#FFF8EB]" 
                    : "bg-[#5A2C16] text-[#EAD8C3] hover:bg-[#6D361B] hover:text-[#FFF8EB]"
                }`}
              >
                {/* Urdu Label */}
                <span className="urdu-header text-base sm:text-lg md:text-2xl leading-none mb-1 font-semibold tracking-wide">
                  {item.urdu}
                </span>
                {/* English Label */}
                <span className="text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.2em] font-sans uppercase opacity-85 leading-none">
                  {item.english}
                </span>
              </button>
            );
          })}

          {/* Branded Logo cell anchored on the far left of the header */}
          <div 
            onClick={() => handleClick("/")}
            className="px-6 md:px-8 py-3 flex items-center justify-center bg-[#4A2411] cursor-pointer hover:bg-[#613018] border-r border-[#3D1C0B]/80 transition-colors"
          >
            <img 
              src={images.logo} 
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert filter opacity-95 hover:opacity-100 transition-opacity duration-300" 
              alt="Logo" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
