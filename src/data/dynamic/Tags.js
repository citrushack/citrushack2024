const mappings = {
  red: {
    background: "bg-citrus-red/20",
    text: "text-citrus-red",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#E13636]",
  },
  yellow: {
    background: "bg-citrus-yellow/20",
    text: "text-citrus-yellow",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#FFB800]",
  },
  green: {
    background: "bg-citrus-green-100/30",
    text: "text-citrus-green-200",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#30503D]",
  },
  gray: {
    background: "bg-hackathon-tags-gray-bg",
    text: "text-hackathon-tags-gray-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#969696]",
  },
  purple: {
    background: "bg-hackathon-tags-purple-bg",
    text: "text-hackathon-tags-purple-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#825ED0]",
  },
  grayblue: {
    background: "bg-hackathon-tags-grayblue-bg",
    text: "text-hackathon-tags-grayblue-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#29465B]",
  },
  teal: {
    background: "bg-hackathon-tags-teal-bg",
    text: "text-hackathon-tags-teal-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#045D5D]",
  },
  lightgreen: {
    background: "bg-hackathon-tags-lightgreen-bg",
    text: "text-hackathon-tags-lightgreen-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#038756]",
  },
  pink: {
    background: "bg-hackathon-tags-pink-bg",
    text: "text-hackathon-tags-pink-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#e384b0]",
  },
};

export const COLORS = {
  qualify: mappings["green"],
  winner: mappings["purple"],
  disqualify: mappings["red"],
  pending: mappings["yellow"],
  accept: mappings["green"],
  reject: mappings["red"],
  confirm: mappings["green"],
  "not attending": mappings["red"],
  professor: mappings["grayblue"],
  student: mappings["teal"],
  industry: mappings["lightgreen"],
  director: mappings["purple"],
  marketing: mappings["teal"],
  operations: mappings["grayblue"],
  sponsorship: mappings["yellow"],
  recruitment: mappings["pink"],
  software: mappings["lightgreen"],
  uiux: mappings["red"],
  tier1: mappings["grayblue"],
  tier2: mappings["lightgreen"],
  tier3: mappings["purple"],
  tier4: mappings["yellow"],
  tier5: mappings["pink"],
  other: mappings["teal"],
  view: mappings["gray"],
  green: mappings["green"],
  gray: mappings["gray"],
  yellow: mappings["yellow"],
  red: mappings["red"],
  lightgreen: mappings["lightgreen"],
  purple: mappings["purple"],
  teal: mappings["teal"],
  grayblue: mappings["grayblue"],
  pink: mappings["pink"],
  2: mappings["purple"],
  1: mappings["green"],
  0: mappings["yellow"],
  "-1": mappings["red"],
};
