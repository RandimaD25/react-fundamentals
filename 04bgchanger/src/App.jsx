import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-6 bg-white p-5 rounded-3xl justify-center">
          <button
            className="bg-red-500 p-5 rounded-md"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-blue-500 p-5 rounded-md"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-green-500 p-5 rounded-md"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
