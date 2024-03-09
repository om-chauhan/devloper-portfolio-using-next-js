import { Menu } from "@/types/menu";
import { ExternalLink } from "lucide-react";
const MainMenuData: Menu[] = [
  {
    id: 1,
    title: "About",
    link: "#about",
    description: "",
  },
  {
    id: 2,
    title: "Projects",
    link: "#projects",
    description: "Get the latest updates",
    subMenu: [
      {
        id: 1.1,
        title: "✨ Local to Social - Social Post Generator",
        link: "https://los.ytools.in/",
        description:
          "Generate unique and eye-catching visuals for your brand in seconds.",
      },
      {
        id: 1.2,
        title: "✨ Flutter Gradient Generator",
        link: "https://gradient.ytools.in/",
        description: "Build Linear, Sweep, and Radial Gradients.",
      },
    ],
  },
  {
    id: 3,
    title: "Skills",
    link: "#skills",
    description: "",
  },
  {
    id: 3,
    title: "Blogs",
    link: "https://www.fluttering.in.net/",
    description: "",
    icon: ExternalLink,
  },
];
export default MainMenuData;
