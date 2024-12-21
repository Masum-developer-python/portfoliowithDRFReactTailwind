function Submenu({ menu, submenu }) {
  //console.log(menu);
  //console.log(submenu);
  return (
    <div className="relative group h-full text-center break-words whitespace-normal">
      <hr></hr>
      <br />
      <br />
      <a className="block px-3 py-2 rounded hover:bg-blue-700" href={menu.src}>
        {menu.title}
      </a>
      {submenu && (
        <div className="absolute left-[80px] transform -translate-y-1/2 mt-2 w-full bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-10">
          {/* Sub-Menu */}
          {submenu.map((item, index) => (
            <a
              key={index}
              href={item.src}
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
    </div>
  );
}

export default Submenu;
