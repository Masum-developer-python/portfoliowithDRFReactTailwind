import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";

function Nav() {
  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className="md:hidden bg-blue-800 text-white p-2"
        onClick={() => {
          const menu = document.getElementById("vertical-menu");
          menu.classList.toggle("hidden");
        }}
      >
        মেনু
      </button>

      {/* Navbar */}
      <nav
        id="vertical-menu"
        className="bg-blue-800 text-white w-32  p-4 hidden md:block"
      >
        <div className="text-lg font-bold mb-6">আরবী শেখা</div>
        <ul className="space-y-4">
          <li>
            <a
              href="/"
              className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              আরবী বর্ণমালা
            </a>
          </li>
          <hr></hr>
          <li>
            <div className="relative group h-full">
              <button className="px-3 py-2 rounded hover:bg-gray-700">
                হরকত
              </button>

              {/* Sub-Menu */}
              <div className="absolute left-[120px] transform -translate-y-1/2 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-10">
                <a
                  href="/fatha"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা যবর সহ
                </a>
                <a
                  href="/kasrah"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা যের সহ
                </a>
                <a
                  href="/dommah"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা পেশ সহ
                </a>
              </div>
            </div>
          </li>
          
          <hr></hr>
          
          <li>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-700">
                তানভীন
              </button>

              {/* Sub-Menu */}
              <div className="absolute left-[120px] transform -translate-y-1/2 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-10">
                <a
                  href="/fathatanween"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা দুই যবর সহ
                </a>
                <a
                  href="/kasrahtanween"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা দুই যের সহ
                </a>
                <a
                  href="/dommahtanween"
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  আরবী বর্ণমালা দুই পেশ সহ
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
