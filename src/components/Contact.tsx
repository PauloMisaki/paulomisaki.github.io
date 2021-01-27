import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Contact() {
  return (
    <div id="contactme" className="flex flex-col justify-center pt-24 bg-black fundocinza">
      <div className="flex flex-col items-center mb-20 leading-none">
        <h3 className="text-6xl font-bold opacity-25">CONTACT</h3>
        <h4 className="z-10 pb-3 mb-4 -mt-8 text-4xl font-bold border-b-2 border-red-900 opacity-100">
          GET IN <span className="">TOUCH</span>
        </h4>
      </div>
      <div id="" className="flex flex-row-reverse items-center justify-center pt-20 pb-20 fundocinza">
        <div className="mx-16 leading-snug">
          <p className="pb-3 pl-4 text-2xl font-bold vermelhoforte">CONTACT ME</p>
          <p className="pb-3 pl-4 ">
            Feel free to get in touch with me. <br />I am <span className="">always open</span> to
            new projects, <br />
            creative ideas and opportunities to bring <span className="">your visions to life.</span>
          </p>
          <h3 className="pl-4 vermelho">Let's build something together !</h3>
          <div className="flex flex-row pt-10 pl-8 space-x-8">
            <a href="https://www.linkedin.com/in/paulo-henrique-soares-bandeira-4a06b5187/">
            <FaLinkedin className="text-4xl"/>
            </a>
            <a href="https://github.com/PauloMisaki">
            <FaGithub className="text-4xl"/>
            </a>
          </div>

        </div>
        <button id="bgcard" className="flex flex-col px-6 my-10 ml-32 mr-10 text-3xl border-solid">
<p className="text-3xl font-bold vermelho ">Paulo Henrique "Misaki"</p>
<p className="mb-3 text-2xl vermelhoforte">FrontEnd Junior Developer</p>
<p className="text-xl"><span className="rosa">Age:</span> 24</p>
<p className="text-xl"><span className="rosa">Residence:</span> BRAZIL</p>
<p className="text-xl"><span className="rosa">Status:</span> AVAILABLE</p>
<p className="text-xl"><span className="rosa">Freelance:</span> AVAILABLE</p>
<p className="text-xl"><span className="rosa">Phone:</span> +55 (21) 96560-4473</p>
<p className="text-xl"><span className="rosa">E-mail:</span> ph.sorata@gmail.com</p>
        </button>
      </div>
    </div>
  );
}
