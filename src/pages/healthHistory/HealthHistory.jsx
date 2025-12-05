// src/pages/healthHistory/HealthHistory.jsx

import Navbar from "../navbar";
import { Button } from "@mantine/core";
import { FiPlus } from "react-icons/fi";
import {
  MdLocalHospital,
  MdSick,
  MdThermostat,
  MdMedication,
} from "react-icons/md";

const familyMembers = [
  { id: "john", name: "John", initials: "J", color: "bg-blue-100", active: false },
  { id: "jane", name: "Jane", initials: "J", color: "bg-pink-100", active: false },
  { id: "emma", name: "Emma", initials: "E", color: "bg-orange-100", active: true },
  { id: "alex", name: "Alex", initials: "A", color: "bg-teal-100", active: false },
];

const events = [
  {
    id: 1,
    dateLabel: "April 18th",
    category: "DOCTOR VISIT",
    type: "Doctor Visit",
    description: "Emma had a pediatrician check-up.",
    person: "Emma",
    Icon: MdLocalHospital,
    pillColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    dateLabel: "April 12th",
    category: "ILLNESS",
    type: "Flu",
    description: "Jane and Emma were diagnosed with the flu.",
    person: "Jane & Emma",
    Icon: MdSick,
    pillColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    dateLabel: "April 11th",
    category: "FEVER",
    type: "Fever",
    description: "Alex had a fever of 38.5°C in the afternoon.",
    person: "Alex",
    Icon: MdThermostat,
    pillColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 4,
    dateLabel: "April 2nd",
    category: "MEDICATION",
    type: "Medication",
    description: "John’s antibiotic prescription was completed.",
    person: "John",
    Icon: MdMedication,
    pillColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function HealthHistory() {
  return (
    <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
      <Navbar />

      {/* Page container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* Top row: title + Add button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Health History
          </h1>

          <Button
            radius="xl"
            size="md"
            className="bg-[#F45B4D] hover:bg-[#e24b3d] flex items-center gap-2 px-5"
          >
            <FiPlus size={20} />
            Add New Record
          </Button>
        </div>

        {/* Family member avatars */}
        <div className="flex flex-wrap items-center gap-4 mb-5">
          {familyMembers.map((member) => (
            <button
              key={member.id}
              className={`flex flex-col items-center gap-1 focus:outline-none`}
            >
              <div
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center 
                  text-base font-semibold text-slate-800 border-2
                  ${member.color}
                  ${
                    member.active
                      ? "border-[#F45B4D] shadow-md"
                      : "border-transparent"
                  }
                `}
              >
                {member.initials}
              </div>
              <span
                className={`text-xs sm:text-sm ${
                  member.active ? "font-semibold text-slate-900" : "text-slate-500"
                }`}
              >
                {member.name}
              </span>
            </button>
          ))}
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-indigo-500" />
            Timeline
            <span className="ml-1 text-slate-500 text-xs">▼</span>
          </button>

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm flex items-center gap-2">
            👥 Family
            <span className="ml-1 text-slate-500 text-xs">▼</span>
          </button>

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm flex items-center gap-2 ml-auto">
            This Month
            <span className="ml-1 text-slate-500 text-xs">▼</span>
          </button>

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm flex items-center gap-2">
            All Categories
            <span className="ml-1 text-slate-500 text-xs">▼</span>
          </button>
        </div>

        {/* Timeline card */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Timeline
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-20 sm:left-24 top-0 bottom-0 border-l border-slate-200" />

            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={event.id} className="relative pl-10 sm:pl-14">
                  {/* Date label */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 sm:w-20 text-xs sm:text-sm text-slate-500 pt-2">
                      {event.dateLabel}
                    </div>

                    {/* Dot on the line */}
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-indigo-400 absolute -left-5 sm:-left-7 top-3" />
                    </div>

                    {/* Event card */}
                    <div className="flex-1 bg-slate-50 rounded-xl shadow-xs px-4 py-3 sm:px-5 sm:py-4">
                      {/* Category pill */}
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide ${event.pillColor}`}
                        >
                          <event.Icon size={14} />
                          {event.category}
                        </span>
                      </div>

                      {/* Main text */}
                      <p className="text-sm sm:text-base font-medium text-slate-900">
                        {event.type}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        {event.description}
                      </p>

                      {/* Person */}
                      <p className="text-xs sm:text-sm text-slate-500 mt-2">
                        👤 <span className="font-medium">{event.person}</span>
                      </p>
                    </div>
                  </div>

                  {/* Extra spacing between groups */}
                  {index !== events.length - 1 && <div className="h-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
