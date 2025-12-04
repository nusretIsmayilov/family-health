import { TextInput, PasswordInput, Checkbox } from '@mantine/core';
import { IconCheck } from "@tabler/icons-react";


export default function LogIn() {
    return (
        <div className="flex bg-[#F8F2EE] justify-center text-center items-center min-h-screen">
            {/* container */}
            <div
                className="flex-none  w-[350px] h-[600px] rounded-tl-3xl rounded-bl-3xl bg-cover bg-center"
                style={{ backgroundImage: "url('/foto1.png')" }}
            >
            </div>
            <div className="bg-white w-[350px] flex-none h-[600px] rounded-tr-3xl rounded-br-3xl">
                <p className="font-semibold text-4xl mt-20">Welcome Back</p>
                <p className="mx-[35px] mt-5 text-center">Manage medications, track illnesses, and care for your loved ones.</p>
                <div className="flex flex-col gap-4 w-[300px] mx-auto">
                    <TextInput
                        placeholder="Email"
                        withAsterisk
                        size="lg"
                        radius="md"
                        styles={{
                            input: {
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                marginTop: "25px"
                            }
                        }}
                    />
                    <PasswordInput
                        placeholder="Password"
                        withAsterisk
                        size="lg"
                        radius="md"
                        styles={{
                            input: {
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                marginTop: "15px"
                            }
                        }}
                    />
                </div>
                <Checkbox
                    label="Remember me"
                    icon={IconCheck}
                />

            </div>
        </div>
    );
}
