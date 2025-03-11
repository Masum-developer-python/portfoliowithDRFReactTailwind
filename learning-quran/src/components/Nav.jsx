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
  console.log("Nav.jsx");
  //console.log("Nav ");
  //console.log(selectedColor);
  //   Object.keys(arabicDiacritics).map((category) =>{
  //     console.log(category);
  //     arabicDiacritics[category].diacritics.map((route, index) => {
  //       console.log(route);
  //   })
  // })
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
        <Submenu selectedTheme={selectedTheme} selectedColor={selectedColor} />
      </nav>
    </>
  );
}
export default Nav;
