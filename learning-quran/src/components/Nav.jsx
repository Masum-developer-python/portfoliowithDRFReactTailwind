import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";
import Submenu from "./menuSubmenu";
import { arabicDiacritics } from "../data";
function Nav({
  selectedColor,
  selectedTheme,
  setSelectedTheme,
  setSelectedColor,
  alphabetColorCombinations,
}) {
  //console.log("Nav ");
  //console.log(selectedColor);
  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className={`md:hidden ${selectedColor.backgroundColor} ${selectedColor.textColor} p-2`}
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
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-4 hidden md:block`}
      >
        <div className="text-lg font-bold mb-6">আরবী শেখা</div>
        <div className="mb-4">
          <ThemeSelector
            selectedTheme={selectedTheme}
            setSelectedTheme={(newTheme) => {
              setSelectedTheme(newTheme);
              setSelectedColor(newTheme.combinations[0]); // Reset color when theme changes
            }}
            alphabetColorCombinations={alphabetColorCombinations}
          />
          <ColorSelector
            selectedTheme={selectedTheme}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <ul className="space-y-4">
          <div>
            {/* <a
              href="/"
              className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              আরবী বর্ণমালা
            </a> */}
            <Submenu
              menu={{
                title: "আরবী বর্ণমালা", src : '/'
              }}
              submenu={[
                
              ]}
            />
          </div>
          <hr></hr>
          <div>
            <Submenu
              menu={{
                title: "হরকত", src : ''
              }}
              submenu={[
                { title: "আরবী বর্ণমালা যবর সহ", src: "/fathah" },
                { title: "আরবী বর্ণমালা যের সহ", src: "/kasrah" },
                { title: "আরবী বর্ণমালা পেশ সহ", src: "/dhammah" },
              ]}
            />
          </div>
          <div>
            <Submenu
              menu={{
                title: "তানভীন", src : ''
              }}
              submenu={[
                { title: "আরবী বর্ণমালা দুই যবর সহ", src: "/fathahtanween" },
                { title: "আরবী বর্ণমালা দুই যের সহ", src: "/kasrahtanween" },
                { title: "আরবী বর্ণমালা দুই পেশ সহ", src: "/dhammahtanween" },
              ]}
            />
          </div>
          <div></div>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
