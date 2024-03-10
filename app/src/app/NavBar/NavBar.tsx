"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const marketingComponents: {
    // TODO: add links
    title: string;
    href: string;
    description: string;
}[] = [
    {
        title: "Find the target audience",
        href: "/",
        description: "Who are your customers and what moves them?",
    },
    {
        title: "Tuning the hook",
        href: "/",
        description: "Capture attention in less than a second.",
    },
    {
        title: "Nailing the offer",
        href: "/",
        description: "Make it a no-brainer to click.",
    },
    {
        title: "High conversion rates",
        href: "/",
        description: "Shortest distance from click to buy.",
    },
];

const securityComponents: {
    // TODO: add links
    title: string;
    href: string;
    description: string;
}[] = [
    {
        title: "Free assessment",
        href: "/",
        description: "Who are your customers and what moves them?",
    },
    {
        title: "How we can help you",
        href: "/",
        description: "Capture attention in less than a second.",
    },
    {
        title: "Penetration testing",
        href: "/",
        description: "Make it a no-brainer to click.",
    },
    {
        title: "Threat Prevention",
        href: "/",
        description: "Shortest distance from click to buy.",
    },
];
const exampleComponents: {
    // TODO: add links
    title: string;
    href: string;
    description: string;
}[] = [
    {
        title: "Development portfolio",
        href: "/",
        description:
            "Check out our designs, landing pages, databases and applications.",
    },
    {
        title: "Marketing campaigns",
        href: "/",
        description:
            "How we present our clients and what the numbers look like.",
    },
    {
        title: "Security assessments",
        href: "/",
        description:
            "Stories on threats we detected and a free self-assessment for you.",
    },
    {
        title: "About the team",
        href: "/",
        description: "Introducing who we are and what we stand for.",
    },
];

export function NavBar() {
    return (
        <NavigationMenu className="fixed top-0 right-0  px-8 py-8 z-50">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent text-white">
                        1 Go online
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Your Website
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed and targeted to
                                            your customers.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Convert clients">
                                {/* TODO: add links*/}
                                Turn strangers into paying customers even while
                                you sleep.
                            </ListItem>
                            <ListItem // TODO: add links
                                href="/"
                                title="Add a web app"
                            >
                                Make the customer experience as smooth as
                                possible.
                            </ListItem>
                            <ListItem href="/" title="E-commerce">
                                {/* TODO: add links*/}
                                Sell online like a pro.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent text-white">
                        2 Marketing
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {/* <div className="pt-12 pb-4">
                            <p className=" text-center ">The strategy</p>
                        </div> */}
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {marketingComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent text-white">
                        3 Cyber Security
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {securityComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent text-white">
                        Examples
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {exampleComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
