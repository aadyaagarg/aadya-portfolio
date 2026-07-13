import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";
import { PORTFOLIO } from "../data/constants";
export function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div>
        <p className="font-mono text-sm text-gray-600 mb-1">&lt;/html&gt;</p>
        <p className="font-mono text-sm text-gray-600 mb-6 pl-4">
          &lt;body&gt;
        </p>
        <p className="font-mono text-sm text-gray-600 mb-2">&lt;h1&gt;</p>
        <h1 className="text-6xl font-extrabold leading-tight mb-3">
          Hello, <br />
          Im <span className="text-teal-400">Aadya</span>, <br />
          Java developer
        </h1>
        <p className="font-mono text-sm text-gray-600 text-right mb-8">
          &lt;/h1&gt;
        </p>

        <p className="font-mono text-sm text-gray-600 mb-1">&lt;p&gt;</p>
        <p className="font-mono text-xl text-gray-400 mb-1">
          <span className="typing">full stack developer</span>
          <span className="text-teal-400 animate-blink">_</span>
        </p>
        <p className="font-mono text-sm text-gray-600 mb-10">&lt;/p&gt;</p>

        <div className="flex items-center gap-8">
          <a
            href={PORTFOLIO.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-teal-400 text-teal-400 px-8 py-4 font-bold rounded transition-colors hover:bg-teal-400 hover:text-gray-950"
          >
            View my CV
          </a>
          <a
            href="#contact"
            className="text-teal-400 font-bold underline underline-offset-4 hover:text-teal-300 transition-colors"
          >
            Booking
          </a>
        </div>
      </div>

      <div className="relative flex justify-center items-center -mt-20">
        <div className="absolute w-96 h-96 rounded-full bg-teal-400 opacity-15 blur-3xl" />

        <div className="relative w-80 h-80 rounded-full bg-gray-900 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden ">
            <img
              src="src\assests\profile.jpg"
              alt="Aadya Garg"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <SiPostgresql size={28} className="text-cyan-500" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <FaJava size={34} className="text-orange-400" />
          </div>
          <div className="absolute bottom-8 -left-2 w-16 h-16 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <SiSpringboot size={28} className="text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
