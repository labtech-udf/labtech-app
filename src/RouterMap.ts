import Home from "./app/pages/home/Home";

const exact = true;

export const RouteMap = {
  home: {
    path: "/",
    Page: Home,
    exact,
  }
};