import { arabicDiacritics } from "../data";
function Submenu() {
  //console.log(menu);
  //console.log(submenu);
  console.log('menuSubmenu.jsx');
  return (
    <ul className="relative h-full text-center break-words whitespace-normal">
      {Object.keys(arabicDiacritics).map((category, index) => (
        <li key={index} className="group">
          <hr></hr>
          <br />
          <br />
          {/* Category Name */}
          <a
            className="block px-3 py-2 rounded hover:bg-blue-700"
            href={"/"+category.toLowerCase()}
          >
            {arabicDiacritics[category].title}
            {/* {menu.title} */}
          </a>
          {arabicDiacritics[category].diacritics && (
            <div className="absolute left-[80px] transform -translate-y-1/2 mt-2 w-full bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-10">
              {/* Sub-Menu */}
              {arabicDiacritics[category].diacritics.map((item, index) => (
                <a
                  key={index}
                  href={'/'+category.toLowerCase()+'/'+item.name.toLowerCase()}
                  className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
          <br />
          <br />
          <hr></hr>
        </li>
      ))}
    </ul>
  );
}

export default Submenu;
