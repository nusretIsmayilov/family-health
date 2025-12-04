import { useState } from "react";
import { Button, Burger, Drawer, ScrollArea } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full shadow-sm bg-[#F8F2EE]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-8" />
          <span className="text-2xl font-semibold text-[#1d2b3a] ">Family Health</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-700 hover:text-red-500 font-medium text-2xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons (Mantine) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="light" color="red">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button color="red">Sign up</Button>
          </Link>
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden">
          <Burger opened={opened} onClick={() => setOpened(true)} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size="80%"
        title="Menu"
      >
        <ScrollArea className="h-full">

          <div className="flex flex-col gap-6 mt-6">

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpened(false)}
                className="text-lg text-gray-700 font-medium hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/login" onClick={() => setOpened(false)}>
              <Button fullWidth variant="light" color="red">Log in</Button>
            </Link>

            <Link to="/signup" onClick={() => setOpened(false)}>
              <Button fullWidth color="red">Sign up</Button>
            </Link>
          </div>

        </ScrollArea>
      </Drawer>
    </header>
  );
}
