export interface Project {
  id: string;
  name: string;
  description: string;
  href: string;
  domain: string;
  logo?: string;
  featured?: boolean;
  links: { label: string; href: string; icon: "external-link" | "github" | "app-store" | "google-play" }[];
}

// This is the page's content index. Add projects and related links here.
// Product descriptions come from the linked product sites.
export const projects: Project[] = [
  {
    id: "skye",
    name: "Skye Routines",
    description: "Turn the things you want to do into a routine you can follow. Start with one small step, and let Skye guide the next.",
    href: "https://skyeroutines.com",
    domain: "skyeroutines.com",
    links: [
      { label: "Explore Skye", href: "https://skyeroutines.com", icon: "external-link" },
      { label: "App Store", href: "https://apps.apple.com/us/app/skye-build-your-routines/id6757465508", icon: "app-store" },
    ],
  },
  {
    id: "argus",
    name: "Argus",
    description: "An AI product team that turns scattered customer evidence into clear product decisions.",
    href: "https://heyargus.app",
    domain: "heyargus.app",
    logo: "/brand/argus.svg",
    featured: true,
    links: [{ label: "Explore Argus", href: "https://heyargus.app", icon: "external-link" }],
  },
  {
    id: "gymifi",
    name: "Gymifi",
    description: "A little structure for a stronger you. Guided workouts, meal plans, and daily progress.",
    href: "https://gymifi.fit",
    domain: "gymifi.fit",
    logo: "/brand/gymifi.png",
    featured: true,
    links: [
      { label: "Explore Gymifi", href: "https://gymifi.fit", icon: "external-link" },
      { label: "App Store", href: "https://apps.apple.com/us/app/gymifi-workout-tracker-diet/id6774939599", icon: "app-store" },
    ],
  },
  {
    id: "servicemon",
    name: "Servicemon",
    description: "One place to start, stop, and check local development services across projects.",
    href: "https://github.com/sauravhiremath/servicemon",
    domain: "github.com",
    links: [{ label: "View source", href: "https://github.com/sauravhiremath/servicemon", icon: "github" }],
  },
  {
    id: "smingle",
    name: "Smingle",
    description: "Less endless swiping. More real dates, shared activities, and meeting someone in person.",
    href: "https://smingle.in",
    domain: "smingle.in",
    logo: "/brand/smingle.svg",
    featured: true,
    links: [
      { label: "Explore Smingle", href: "https://smingle.in", icon: "external-link" },
      { label: "App Store", href: "https://apps.apple.com/in/app/smingle-match-to-meetup/id6741871583", icon: "app-store" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.smingle.app", icon: "google-play" },
    ],
  },
];
