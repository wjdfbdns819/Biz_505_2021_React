import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "../css/MainNav.css";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";


const align_right = {
	marginLeft: "auto",
}

// 합성 패턴을 이용하여 Navbar 만들기
function MainNav({ children, NavList }) {
  const nav_items = NavList.map((nav) => {

    return (
		
		// nav에 align이 true이면 align_right를 적용하라는 의미임
      <li className="nav_item" key={nav.id} style={nav.align && align_right}>

        <NavLink to={nav.link}>{nav.title}
		
		</NavLink>
		
      </li>
    );
  });

  return (
    <BrowserRouter>
      <ul className="nav">{nav_items}</ul>
      {children}
    </BrowserRouter>
  );
}

export default MainNav;
