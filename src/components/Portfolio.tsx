export default function Portfolio() {
    return (
        <div id="myworks" className="flex flex-col bg-black fundocinza">
            <div className="flex flex-col items-center mt-24 mb-20 leading-none">
            <p className="text-6xl font-bold opacity-25">SOME WORKS</p>
            <p className="z-10 pb-2 mb-4 -mt-8 text-4xl font-bold border-b-2 border-red-900">MY <span className="vermelho">PORTFOLIO</span></p>
            </div>
                <div id="" className="flex flex-row justify-center pt-40 pb-40 space-x-12">
                    <a href="" id="port" className="transition-all duration-500 ease-in-out transform opacity-50 hover:opacity-100">
                        <img src="veterinaria.png" alt="" className="photo"/>
                        
                    </a>
                    <a href="" id="port" className="transition-all duration-500 ease-in-out transform opacity-50 hover:opacity-100">
                        <img src="arquitetura.png" alt="" className="photo"/>
                    </a>
                </div>
        </div>
    )
}