export const APP_ROUTES = {
  ROOT: "/",
  ABOUT: "/about",
  CASES: "/cases",
  CONTACTS: "/contacts"
} as const;

export const ROUTES_NAMES_MAP = {
  "/": "Главная",
  "/about": "О нас",
  "/cases": "Кейсы",
  "/contacts": "Контакты"
} as const;

export const NAV_LINKS = [
  {
    id: "qp",
    route: APP_ROUTES.ROOT,
    title: ROUTES_NAMES_MAP[APP_ROUTES.ROOT],
  },
  {
    id: "qs",
    route: APP_ROUTES.ABOUT,
    title: ROUTES_NAMES_MAP[APP_ROUTES.ABOUT],
  },
  {
    id: "qw",
    route: APP_ROUTES.CASES,
    title: ROUTES_NAMES_MAP[APP_ROUTES.CASES],
  },
  {
    id: "qf",
    route: APP_ROUTES.CONTACTS,
    title: ROUTES_NAMES_MAP[APP_ROUTES.CONTACTS],
  }
] as const;