import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    };

    return (
        <div className="flex flex-col md:flex-row bg-[#F8F2EE] justify-center items-center min-h-screen p-4">

            {/* Left Image Section (mobile: full width, tablet/desktop: left side) */}
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
                    Welcome Back
                </p>

                <p className="mx-6 mt-4 text-gray-600">
                    Manage medications, track illnesses, and care for your loved ones.
                </p>

                <div className="flex flex-col gap-4 w-[90%] max-w-[300px] mx-auto mt-6">
                    <TextInput
                        placeholder="Email"
                        withAsterisk
                        size="lg"
                        radius="md"
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
                        styles={{
                            input: {
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            },
                        }}
                    />


                    <div className="flex items-center justify-between w-full">
                        <Checkbox
                            label="Remember me"
                            icon={IconCheck}
                            styles={{
                                root: { width: "auto" },
                                inner: { width: "auto" },
                                body: { width: "auto" }
                            }}
                        />
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            Forgot password?
                        </a>
                    </div>

                    <Button
                        onClick={handleLogin}
                        variant="filled"
                        color="rgba(207, 0, 0, 1)"
                        size="lg"
                        radius="md"
                        className="w-full"
                    >
                        Log In
                    </Button>
                </div>
                <div className="h-[1px] w-[90%] max-w-[300px] bg-gray-300 mx-auto my-5"></div>

                <p className="text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="font-semibold text-red-600">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
