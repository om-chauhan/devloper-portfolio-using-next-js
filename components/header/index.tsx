"use client";
import Link from "next/link";
import MainMenuData from "./mainMenuData";
import { ChevronRight, Menu, X } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ListItem from "./headerItem";
import { ModeToggle } from "../modeTongle";
const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-10 my-5 relative">
      {/* Logo */}
      <Link href="/" className="uppercase font-medium text-[32px] font-bebas">
        <Image
          src="/images/header-logo.png"
          alt="Logo"
          width={50}
          height={50}
          quality={100}
          unoptimized
        />
      </Link>
      {/* End Logo */}
      {/* Middle Main Menu*/}
      <NavigationMenu className="hidden xl:block flex-auto">
        <NavigationMenuList>
          {MainMenuData.map((menu, index) =>
            menu.subMenu ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {menu.subMenu.map((subMenu, index) => (
                      <ListItem
                        key={index}
                        title={subMenu.title}
                        href={subMenu.link}>
                        {subMenu.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <Link href={menu.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menu.title}
                    {menu.icon && <menu.icon className="h-4 w-4 m-2" />}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
      {/* End Middle Main Menu*/}

      <div className="flex items-center gap-2">
        {/* Mobile View */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden">
              <Menu className="h-5 w-5" />
              {/* <CrossIcon className="h-4 w-4" /> */}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex-auto w-[150px]">
            {MainMenuData.map((item, index) => (
              <div key={index} className={cn("flex-auto items-center w-100")}>
                {/* <ChevronRight className="h-4 w-4" /> */}

                <Link
                  href={item.link}
                  target="_blank"
                  className={cn(
                    "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}>
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.icon && <item.icon className="h-4 w-4 m-2" />}
                </Link>
              </div>
            ))}
          </PopoverContent>
        </Popover>
        {/* End Mobile View */}
        {/* Dark Mode */}
        <ModeToggle />
        {/* End Dark Mode */}
      </div>
    </div>
  );
};

export default Header;
