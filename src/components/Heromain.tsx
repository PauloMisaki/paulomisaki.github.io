export default function Heromain() {
  return (
    <div id="works" className="flex flex-row justify-center pt-40 pb-40 space-x-40 bg-black">
      <div id="foto" className="">
        <img src="fotoperfil.jpeg" alt="" className="border border-gray-700 rounded-lg"/>
      </div>
      <div id="" className="">
        <p id="henlo" className="pl-4 mt-32 text-sm border-l-2 border-red-900 animate-up">
          Hello there!
        </p>
        <p id="namae" className="pl-4 text-4xl border-l-2 border-red-800 animate-up">
          I am{" "}
          <span className="text-5xl font-bold vermelho">PAULO MISAKI</span>
        </p>
        <p id="me" className="pl-4 text-lg border-l-2 border-red-700 animate-up">
          A Brazilian based Full-Stack Developer focused on <br />
          <span className="">crafting clean & perfect experiences</span>.
        </p>
        <p id="myport" className="pl-4 text-lg border-l-2 border-red-600 animate-up">
          And this is my Personal Portfolio!
        </p>
        <a href="#myworks">
        <button
          id="see"
          className="px-8 py-2 my-6 ml-6 font-bold duration-200 bg-red-900 border-1 animate-up rounded-xl hover:bg-red-700 "
          
        >
          <span className="hovering">SEE MY WORKS ▶ </span>
  <span className="default">{' '}SEE MY WORKS ▶
            <span className="fab fa-telegram-plane"></span>
          </span>
        </button>
        </a>
      </div>
    </div>
  );
}
