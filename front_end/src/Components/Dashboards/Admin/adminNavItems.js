// src/data/adminNavItems.js
import {
  faGaugeHigh,
  faUsers,
  faUserPlus,
  faBook,
  faFlask,
  faClipboardList,
  faChartLine,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export const adminNavItems = [
  {
    id: "overview",
    title: "Overview",
    icon: faGaugeHigh,
  },
  {
    id: "usersTable",
    title: "Users Table",
    icon: faUsers,
  },
  {
    id: "addUser",
    title: "Add User",
    icon: faUserPlus,
  },
  {
    id: "courses",
    title: "Courses",
    icon: faBook,
  },
  {
    id: "activities",
    title: "Site Activities",
    icon: faChartLine,
  },
];
