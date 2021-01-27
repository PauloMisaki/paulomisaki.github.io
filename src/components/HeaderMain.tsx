export default function HeaderMain() {
    return (
        <div className="fixed z-10 flex flex-row justify-between w-full py-4 border-t-4 bg-none box-nav">
            <div className="mt-1 ml-8">
                <img src="logo.png" alt="" className=""/>
            </div>
            <div className="mt-4 mr-16 space-x-12">
<a href="#" className="pb-1 duration-200 ease-in-out border-b-2 border-red-900 hover:text-red-600">About</a>
<a href="#myworks" className="pb-1 duration-200 ease-in-out border-b-2 border-red-900 hover:text-red-600">My Works</a>
<a href="#contactme" className="pb-1 duration-200 ease-in-out border-b-2 border-red-900 hover:text-red-600">Contact</a>
            </div>
        </div>
    )
}