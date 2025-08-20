import React from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => (
            <li
              key={menu.id}
              className={`has-dropdown ${
                menu.home_menus || menu.portfolio_mega_menus
                  ? "has-homemenu"
                  : ""
              } ${menu.home_menus ? "dropdown-opened" : ""}`}
            >
              <Link href={menu?.link} className="pointer" onClick={() => openMobileMenu(menu.title)}>
                {menu.title}
                <button className="dropdown-toggle-btn">
                  <i className="fa-light fa-plus"></i>
                </button>
              </Link>
              
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
