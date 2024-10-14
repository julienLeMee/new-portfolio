"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Déclaration sans typage explicite
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

export default function Menu() {
  // État pour stocker l'élément actuellement survolé
  const [hoveredItem, setHoveredItem] = React.useState({
    title: "shadcn/ui",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    href: "/",
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Experiences</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                {/* NavigationMenuLink qui change dynamiquement */}
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={hoveredItem.href}
                    style={{
                      backgroundImage: hoveredItem.backgroundImage,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium leading-[1.1]">
                      {hoveredItem.title}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {hoveredItem.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* Liste des items qui met à jour l'élément survolé */}
              <ListItem
                href="/docs"
                title="Introduction"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Full stack web developer",
                    description: "PHP | Wordpress | Javascript",
                    href: "/docs",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(255, 189, 122, 0), rgba(255, 189, 122, 1))",
                  })
                }
              >
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="Installation"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Installation",
                    description:
                      "How to install dependencies and structure your app.",
                    href: "/docs/installation",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(227, 175, 190, 0), rgba(227, 175, 190, 1))",
                  })
                }
              >
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Typography"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Typography",
                    description: "Styles for headings, paragraphs, lists...etc",
                    href: "/docs/primitives/typography",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(95, 154, 65, 0), rgba(95, 154, 65, 1))",
                  })
                }
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
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
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
