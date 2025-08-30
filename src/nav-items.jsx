import { Home, Info, Wrench, Star, TrendingUp, BookOpen, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "홈",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "소개",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <div>소개 페이지</div>,
  },
  {
    title: "도구",
    to: "/tools",
    icon: <Wrench className="h-4 w-4" />,
    page: <div>도구 페이지</div>,
  },
  {
    title: "리뷰",
    to: "/reviews",
    icon: <Star className="h-4 w-4" />,
    page: <div>리뷰 페이지</div>,
  },
  {
    title: "트렌드",
    to: "/trends",
    icon: <TrendingUp className="h-4 w-4" />,
    page: <div>트렌드 페이지</div>,
  },
  {
    title: "블로그",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>블로그 페이지</div>,
  },
  {
    title: "연락처",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>연락처 페이지</div>,
  },
];
