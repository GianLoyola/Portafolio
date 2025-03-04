import { useState } from "react";


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import {
  HiOutlineArchive,
  HiOutlineBriefcase,
  HiOutlineIdentification,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Outlet } from "react-router";

export const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let path = window.location.pathname;

  const navbarItems = [
    { label: "Sobre mi", href: "/#aboutMe", icon: <HiOutlineArchive /> },
    { label: "Proyectos", href: "/#proyects", icon: <HiOutlineBriefcase /> },
    { label: "Experiencia", href: "/#experience", icon: <HiOutlineIdentification />,},
    { label: "Contactame", href: "/#contact", icon: <HiOutlineUserGroup /> },
  ];

  return (
    <div id="aboutMe" className="bg-gradient-to-b from-[#091C3A] to-[#060814] min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar
          height={"55px"}
          className="!bg-transparent !bg-opacity-0 !backdrop-saturate-100"
          onMenuOpenChange={setIsMenuOpen}
          isBlurred={true}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white"
            />
            <NavbarBrand>
              <p className="text-white font-bold text-inherit">ACME</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-14" justify="center">
            {navbarItems.map((x, index) => (
              <NavbarItem key={index}>
                <Link
                  className={path === x.href ? "w-full" : "w-full text-white"}
                  color={path === x.href ? "primary" : "foreground"}
                  href={x.href}
                  size="md"
                  aria-current={path === x.path ? "page" : undefined}
                >
                  {x.icon}
                  {x.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent justify="end">
            {/*PONER LOS BOTONES PARA LOS CONTACTOS*/}
          </NavbarContent>

          <NavbarMenu className="bg-[#0a2042]">        
            {navbarItems.map((x, index) => (
              <NavbarMenuItem key={index} className="pt-5">
                <Link
                 className={path === x.href ? "w-full" : "w-full text-white"}
                  color={path === x.href ? "primary" : ""}
                  href={x.href}
                  size="lg"
                  aria-current={path === x.path ? "page" : undefined}
                >
                  {x.icon}
                  {x.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>

      <Outlet />
    </div>
  );
};
