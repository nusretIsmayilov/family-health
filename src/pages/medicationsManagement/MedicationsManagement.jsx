import Navbar from "../navbar";
import { Button } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

export default function MedicationsManagement() {
    return (
        <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
            <Navbar />

            {/* Page Container */}
            <div className="p-4 sm:p-8 w-full max-w-5xl mx-auto">

                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                    <p className="font-semibold text-2xl sm:text-3xl md:text-4xl">
                        Medications
                    </p>

                    <Button
                        variant="filled"
                        color="rgba(207, 0, 0, 1)"
                        size="md"
                        radius="md"
                        className="flex items-center gap-2"
                    >
                        <AiOutlinePlus size={20} />
                        Add Medication
                    </Button>
                </div>

                {/* Medication Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-start">

                    {/* Left Image */}
                    <img
                        className="w-16 h-16 object-contain"
                        src="/medicine.png"
                        alt="medicine"
                    />

                    {/* Medication Details */}
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="text-lg font-semibold">Drug Name</p>

                        <p className="text-gray-600">Dose: 200mg</p>
                        <p className="text-gray-600">Times a day: 2</p>

                        {/* NEW — Who will take this medicine */}
                        <p className="text-gray-800 mt-1">
                            👤 <strong>Person:</strong> John Doe
                        </p>

                        <p className="text-gray-600 mt-2">
                            Next dose at <strong>14:30</strong>
                        </p>


                    </div>

                    <div className="flex flex-row sm:flex-col items-center gap-3 mt-3">

                        <Button
                            variant="filled"
                            color="green"
                            size="md"
                            radius="md"
                            className="w-28"
                        >
                            Taken
                        </Button>

                        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl">
                            <FiEdit2 size={22} className="text-gray-700" />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}
