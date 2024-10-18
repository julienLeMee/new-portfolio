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
    title: "Selected projects",
    href: "/#selected-projects",
    description:
      "Explore a selection of key projects, showcasing major achievements.",
  },
  {
    title: "Projects details",
    href: "/projects",
    description:
      "Browse through all my projects, with insights into the technologies used.",
  },
];

export default function Menu() {
  // État pour stocker l'élément actuellement survolé
  const [hoveredItem, setHoveredItem] = React.useState({
    title: "My experiences",
    description:
      "This is a list of of my latest experiences.",
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
                title="Full stack web developer"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Full stack web developer",
                    description: "PHP | Wordpress | JS",
                    href: "/projects",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(255, 189, 122, 0), rgba(255, 189, 122, 1))",
                  })
                }
              >
                WordPress websites | Debugging | Analysis | Customization | Training
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="Freelance"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Freelance",
                    description: "Next JS | Tailwind | JS",
                    href: "/projects",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(227, 175, 190, 0), rgba(227, 175, 190, 1))",
                  })
                }
              >
                Created responsive showcase websites.
              </ListItem>
              <ListItem
                href="/projects"
                title="Teacher assistant"
                onMouseEnter={() =>
                  setHoveredItem({
                    title: "Teacher assistant (Le Wagon)",
                    description: "Ruby on rails | CSS | JS",
                    href: "/projects",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%), linear-gradient(to top, rgba(95, 154, 65, 0), rgba(95, 154, 65, 1))",
                  })
                }
              >
                Assisted students | Debugging | Pair programming | Support
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
