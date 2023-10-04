export const FILTERS = {
  pending: true,
  accept: true,
  reject: true,
};

export const TAGS = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
  {
    text: "pending",
    value: 0,
  },
];

export const HEADERS = [
  { text: "name", size: 3, icon: true, sort: "off", symbol: "lead" },
  { text: "email", size: 4, icon: true, sort: "off" },
  {
    text: "affiliation",
    size: 2,
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "status",
    size: 2,
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
