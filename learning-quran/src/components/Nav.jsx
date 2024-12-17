import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";
import Submenu from "./menuSubmenu";

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
            <Submenu
              menu={{
                title: "হরকত",
              }}
              submenu={[
                { title: "আরবী বর্ণমালা যবর সহ", src: "/fatha" },
                { title: "আরবী বর্ণমালা যের সহ", src: "/kasrah" },
                { title: "আরবী বর্ণমালা পেশ সহ", src: "/dommah" },
              ]}
            />
          </li>
          <li>
            <Submenu
              menu={{
                title: "তানভীন",
              }}
              submenu={[
                { title: "আরবী বর্ণমালা দুই যবর সহ", src: "/fathatanween" },
                { title: "আরবী বর্ণমালা দুই যের সহ", src: "/kasrahtanween" },
                { title: "আরবী বর্ণমালা দুই পেশ সহ", src: "/dommahtanween" },
              ]}
            />
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
