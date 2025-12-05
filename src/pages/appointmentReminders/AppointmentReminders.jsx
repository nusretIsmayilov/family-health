
import Navbar from "../navbar"

import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    Group,
    Select,
    Text,
    SegmentedControl,
    Badge,
} from "@mantine/core";

const familyMembers = [
    { id: "john", name: "John" },
    { id: "jane", name: "Jane" },
    { id: "emma", name: "Emma" },
    { id: "alex", name: "Alex" },
];

const upcomingAppointments = [
    {
        id: "1",
        dateLabel: "April 21",
        who: "Emma",
        doctorName: "Dr. Ahmet Yılmaz",
        specialty: "Pediatrics",
        relativeTime: "In 2 days",
    },
    {
        id: "2",
        dateLabel: "April 23",
        who: "Emma",
        doctorName: "Dr. Ali Demir",
        specialty: "Cardiology",
        relativeTime: "Tomorrow",
    },
    {
        id: "3",
        dateLabel: "April 25",
        who: "Emma",
        doctorName: "Dr. Zeynep Yıldız",
        specialty: "Dentistry",
        relativeTime: "Today 15:00",
    },
];

const pastAppointments = [
    {
        id: "1",
        dateLabel: "April 18",
        doctorName: "Dr. Ahmet Yılmaz",
        typeLabel: "DOCTOR VISIT",
        description: "Emma had a Pediatrician check-up",
    },
];
export default function AppointmentReminders() {

    const [selectedMember, setSelectedMember] = useState("emma");
    const [timelineView, setTimelineView] = useState("timeline");
    const [timeFilter, setTimeFilter] = useState("upcoming");
    return (
        <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
            
            <Navbar />
            <div className="p-4 sm:p-8 w-full max-w-5xl mx-auto">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-semibold text-gray-900">
                        Appointments
                    </h1>

                    <Button
                        leftSection={<span className="text-xl leading-none">＋</span>}
                        radius="xl"
                        size="md"
                        className="px-5"
                        color="red"
                    >
                        Add Appointment
                    </Button>
                </div>

                {/* FAMILY AVATARS */}
                <div className="flex items-center gap-6 mb-6">
                    {familyMembers.map((member) => {
                        const isActive = member.id === selectedMember;
                        return (
                            <button
                                key={member.id}
                                onClick={() => setSelectedMember(member.id)}
                                className="flex flex-col items-center gap-1 focus:outline-none"
                            >
                                <div
                                    className={`p-[2px] rounded-full ${isActive ? "bg-blue-500" : "bg-transparent"
                                        }`}
                                >
                                    <Avatar
                                        radius="xl"
                                        size={56}
                                        className="border border-white shadow-sm"
                                    >
                                        {member.name[0]}
                                    </Avatar>
                                </div>
                                <span
                                    className={`text-xs ${isActive ? "font-semibold text-gray-900" : "text-gray-500"
                                        }`}
                                >
                                    {member.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* FILTER BAR */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <Card
                        radius="xl"
                        withBorder
                        className="px-4 py-2 flex items-center bg-white shadow-sm"
                    >
                        <SegmentedControl
                            value={timelineView}
                            onChange={setTimelineView}
                            data={[
                                { label: "Timeline", value: "timeline" },
                                { label: "Calendar", value: "calendar" },
                            ]}
                            className="text-xs"
                        />
                    </Card>

                    <Card
                        radius="xl"
                        withBorder
                        className="px-4 py-2 flex items-center bg-white shadow-sm"
                    >
                        <Select
                            placeholder="Specialty"
                            data={["All", "Pediatrics", "Cardiology", "Dentistry"]}
                            defaultValue="All"
                            nothingFound="No specialties"
                            variant="unstyled"
                            className="min-w-[140px] text-sm"
                        />
                    </Card>

                    <Card
                        radius="xl"
                        withBorder
                        className="px-2 py-2 flex items-center bg-white shadow-sm"
                    >
                        <SegmentedControl
                            value={timeFilter}
                            onChange={setTimeFilter}
                            data={[
                                { label: "Upcoming", value: "upcoming" },
                                { label: "Past", value: "past" },
                            ]}
                            className="text-xs"
                        />
                    </Card>
                </div>

                {/* UPCOMING APPOINTMENTS */}
                {timeFilter === "upcoming" && (
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                            Upcoming Appointments
                        </h2>

                        <div className="flex flex-col gap-3">
                            {upcomingAppointments.map((appt) => (
                                <Card
                                    key={appt.id}
                                    withBorder
                                    radius="xl"
                                    className="bg-white shadow-sm flex items-center justify-between px-5 py-4"
                                >
                                    {/* Date */}
                                    <div className="w-24 text-sm text-gray-500">
                                        {appt.dateLabel}
                                    </div>

                                    {/* Middle */}
                                    <div className="flex-1 flex items-center gap-4">
                                        <Avatar radius="xl" size={42}>
                                            {appt.who[0]}
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <Text className="text-sm font-semibold text-gray-900">
                                                {appt.doctorName}
                                            </Text>
                                            <Text className="text-xs text-gray-500">
                                                {appt.specialty} • {appt.who}
                                            </Text>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col items-end gap-2">
                                        <Text className="text-xs text-gray-500">
                                            {appt.relativeTime}
                                        </Text>

                                        {/* Fake toggle */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">Reminder</span>
                                            <button className="w-9 h-5 rounded-full bg-blue-500 relative transition-colors">
                                                <span className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-4 shadow-sm" />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                {/* PAST APPOINTMENTS */}
                {timeFilter === "past" && (
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                            Past Appointments
                        </h2>

                        <div className="flex flex-col gap-3">
                            {pastAppointments.map((appt) => (
                                <Card
                                    key={appt.id}
                                    withBorder
                                    radius="xl"
                                    className="bg-white shadow-sm px-5 py-4"
                                >
                                    <div className="flex">
                                        {/* Date */}
                                        <div className="w-24 text-sm text-gray-500">
                                            {appt.dateLabel}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col gap-2">
                                            <Group gap="xs">
                                                <Badge
                                                    radius="xl"
                                                    color="green"
                                                    variant="light"
                                                    className="uppercase text-[10px] tracking-wide"
                                                >
                                                    {appt.typeLabel}
                                                </Badge>
                                            </Group>

                                            <Text className="text-sm text-gray-900 font-semibold">
                                                {appt.description}
                                            </Text>

                                            <Text className="text-xs text-gray-500">
                                                {appt.doctorName}
                                            </Text>

                                            <div className="mt-3 flex gap-3">
                                                <Button
                                                    variant="outline"
                                                    radius="xl"
                                                    size="xs"
                                                    className="px-4"
                                                >
                                                    Add Note
                                                </Button>

                                                <Button
                                                    variant="light"
                                                    radius="xl"
                                                    size="xs"
                                                    className="px-4"
                                                    color="blue"
                                                >
                                                    Rebook
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}
            </div>

        </div>


    )
};