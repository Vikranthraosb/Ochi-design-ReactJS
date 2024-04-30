import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-5 text-white flex justify-between items-center">
      {/* make it fixed and z index high */}
      <div className="logo text-3xl font-semibold ">OCHI</div>
      <div className="links flex gap-12">
        {["Services", "Our Works", "About Us", "Insights", "Contacts"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-md capitalize ${index === 4 && "ml-32"}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
