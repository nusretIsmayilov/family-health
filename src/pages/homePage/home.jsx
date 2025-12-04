import Navbar from "../navbar"
import { Button } from "@mantine/core"
import { IconHome, IconUser, IconBell } from "@tabler/icons-react";

export default function Home() {
    return (
        <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
            <Navbar />
            <div className="flex flex-col  items-center my-10">
                <p className="font-semibold text-5xl">
                    A Smarter Way to Manage Your Health
                </p>
                <p className="text-xl my-10">
                    Organize medications, track health history and stay on top of doctor appointments for you and your family.
                </p>
                <Button
                    variant="filled"
                    color="rgba(207, 0, 0, 1)"
                    size="lg"
                    radius="md"
                    className="w-full"
                >
                    Get Started
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-[40px] max-w-[700px] mx-auto my-10 text-center place-items-center">

                {/* 1. Kutu */}
                <a href="#" className="max-w-[320px] w-full mx-auto bg-white rounded-2xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="/home-foto-1.png"
                            alt="Medication Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-4xl">
                            Medications <br /> Management
                        </div>
                    </div>
                </a>

                {/* 2. Kutu */}
                <a href="#" className="max-w-[320px] w-full mx-auto bg-white rounded-2xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="/home-foto-2.png"
                            alt="Health Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-4xl">
                            Health <br /> History
                        </div>
                    </div>
                </a>

                {/* 3. Kutu */}
                <a href="#" className="max-w-[320px] w-full mx-auto my-5 bg-white rounded-2xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="/home-foto-1.png"
                            alt="Appointment Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-4xl">
                            Appointment <br /> Reminders
                        </div>
                    </div>
                </a>

                {/* 4. Kutu */}
                <a href="#" className="max-w-[320px] w-full mx-auto my-5 bg-white rounded-2xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="/home-foto-1.png"
                            alt="Family Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-4xl">
                            Family <br /> Tree
                        </div>
                    </div>
                </a>

            </div>

        </div>


    )
};