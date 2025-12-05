import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        // Backend yok → hiçbir işlem yapma
        console.log("Sign Up clicked (no backend active)");
    };

    return (
        <div className="flex flex-col md:flex-row bg-[#F8F2EE] justify-center items-center min-h-screen p-4">

            {/* Left Image Section */}
            <div
                className="
                    w-full 
                    md:w-[350px] 
                    h-[250px] 
                    md:h-[600px] 
                    rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none
                    bg-cover bg-center
                "
                style={{ backgroundImage: "url('/foto1.png')" }}
            ></div>

            {/* Right White Box */}
            <div
                className="
                    bg-white 
                    w-full 
                    md:w-[350px] 
                    h-auto 
                    md:h-[600px] 
                    rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none 
                    text-center 
                    py-10
                "
            >
                <p className="font-semibold text-3xl md:text-4xl mt-5 md:mt-20">
                    Sign Up
                </p>

                <p className="mx-6 mt-4 text-gray-600">
                    Create an account to manage your health and your family's health.
                </p>

                <div className="flex flex-col gap-4 w-[90%] max-w-[300px] mx-auto mt-6">

                    <TextInput
                        placeholder="Email"
                        withAsterisk
                        size="lg"
                        radius="md"
                        onChange={(e) => setEmail(e.target.value)}
                        styles={{
                            input: {
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            },
                        }}
                    />

                    <PasswordInput
                        placeholder="Password"
                        withAsterisk
                        size="lg"
                        radius="md"
                        onChange={(e) => setPassword(e.target.value)}
                        styles={{
                            input: {
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            },
                        }}
                    />

                    <Checkbox
                        label="I accept the terms of service"
                        icon={IconCheck}
                        className="mt-2"
                    />

                    <Button
                        variant="filled"
                        color="rgba(207, 0, 0, 1)"
                        size="lg"
                        radius="md"
                        className="w-full"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </div>

                <div className="h-[1px] w-[90%] max-w-[300px] bg-gray-300 mx-auto my-5"></div>

                <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-red-600">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
