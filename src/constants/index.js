import { advanced, arcade, checkmark, pro } from "../assets/images";

export const NavLinks = [
  { id: 1, step: "Step 1", title: "Your info", link: "/" },
  { id: 2, step: "Step 2", title: "Select plan", link: "select-plan" },
  { id: 3, step: "Step 3", title: "Add-ons", link: "add-ons" },
  { id: 4, step: "Step 4", title: "Summary", link: "summary" },
];

export const Plans = [
  {
    id: "arcade",
    image: arcade,
    title: "Arcade",
    monthly: "$9/mo",
    yearly: "$90/yr",
    free: "2 months free",
  },
  {
    id: "advanced",
    image: advanced,
    title: "Advanced",
    monthly: "$12/mo",
    yearly: "$120/yr",
    free: "2 months free",
  },
  {
    id: "pro",
    image: pro,
    title: "Pro",
    monthly: "$15/mo",
    yearly: "$150/yr",
    free: "2 months free",
  },
];

export const addOns = [
  {
    id: 1,
    image: checkmark,
    title: "Online service",
    content: "Access to multiplayer games",
    value: [{ monthly: "+$1/mo" }, { yearly: "+$10/yr" }],
  },
  {
    id: 2,
    image: checkmark,
    title: "Larger storage",
    content: "Extra 1TB of cloud save",
    value: [{ monthly: "+$2/mo" }, { yearly: "+$20/yr" }],
  },
  {
    id: 3,
    image: checkmark,
    title: "Customizable profile",
    content: "Custom theme on your profile",
    value: [{ monthly: "+$2/mo" }, { yearly: "+$20/yr" }],
  },
];
