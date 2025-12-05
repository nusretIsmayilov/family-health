import Navbar from "../navbar"
import { Button } from "@mantine/core"
import { IconHome, IconUser, IconBell } from "@tabler/icons-react";

export default function Home() {
    return (
        <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
            <Navbar />
            <div className="flex flex-col  items-center my-8">
                <p className="font-semibold text-5xl">
                    A Smarter Way to Manage Your Health
                </p>
                <p className="text-xl my-8">
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
            <div className="grid grid-cols-2 gap-[40px] max-w-[700px] mx-auto m7-8 text-center place-items-center">

                {/* 1. Kutu */}
                <a href="medicationsManagement" className="max-w-[320px] w-full mx-auto bg-white rounded-2xl py-10 px-10">
                    <div className="flex flex-col items-center">
                        <img
                            src="/drug.png"
                            alt="Medication Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                            Medications <br /> Management
                        </div>
                    </div>
                </a>

                {/* 2. Kutu */}
                <a href="healthHistory" className="max-w-[320px] w-full mx-auto bg-white rounded-2xl py-10 px-10">
                    <div className="flex flex-col items-center">
                        <img
                            src="/medical-check.png"
                            alt="Health Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                            Health <br /> History
                        </div>
                    </div>
                </a>

                {/* 3. Kutu */}
                <a href="appointmentReminders" className="max-w-[320px] w-full mx-auto my-5 bg-white rounded-2xl py-10 px-10">
                    <div className="flex flex-col items-center">
                        <img
                            src="/schedule.png"
                            alt="Appointment Icon"
                            className="w-20 h-20 mb-3"
                        />
                        <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                            Appointment <br /> Reminders
                        </div>
                    </div>
                </a>

                {/* 4. Kutu */}
                <a href="familytree" className="max-w-[320px] w-full mx-auto my-5 bg-white rounded-2xl py-10 px-10">
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

        </div>


    )
};