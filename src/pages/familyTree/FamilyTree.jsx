import Navbar from "../navbar"


export default function FamilyTree() {
    return (
        <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
            <Navbar />
            
            <a className="max-w-[320px] w-full mx-auto my-5 bg-white rounded-2xl py-10 px-10">
                    <div className="flex flex-col items-center">
                        <img
                            src="/family-tree.png"
                            alt="Family Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                            Family <br /> Tree
                        </div>
                    </div>
                </a>

        </div>


    )
};