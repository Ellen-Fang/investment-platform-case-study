import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { ArticleDetail } from "./pages/article-detail";
import { Profile } from "./pages/profile";
import { CreatePost } from "./pages/create-post";
import { Login } from "./pages/login";
import { BeeShop } from "./pages/bee-shop";
import Community from "./pages/community";
import UserProfile from "./pages/user-profile";
import { AboutIcon } from "./pages/about-icon";
import { RechargeBee } from "./pages/recharge-bee";
import { LevelGuide } from "./pages/level-guide";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "community",
        Component: Community,
      },
      {
        path: "article/:id",
        Component: ArticleDetail,
      },
      {
        path: "user/:userId",
        Component: UserProfile,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "create",
        Component: CreatePost,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "shop",
        Component: BeeShop,
      },
      {
        path: "about-icon",
        Component: AboutIcon,
      },
      {
        path: "recharge-bee",
        Component: RechargeBee,
      },
      {
        path: "level-guide",
        Component: LevelGuide,
      },
    ],
  },
]);