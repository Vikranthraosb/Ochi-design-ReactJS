import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[14vw] h-[14vw] rounded-full bg-white flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                {/* eyeball is inside the line class and we can rotate the "line" class to animate the eyeball */}
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] rounded-full bg-white flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                {/* eyeball is inside the line class and we can rotate the "line" class to animate the eyeball */}
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
