import React from "react";
import { Route } from "react-router-dom";

import MainNav from "./MainNav";

import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";
import Notice from "./Notice";
import BBs from "./BBs";
import Admin from "./Admin";
import AuthRoute from "./AuthRoute";

import {useUserContext} from "../context/UserContextProvider";
import LogOut from "./Logout";




function MainComp() {

	const {user, setUser} = useUserContext();

	const NavList = [
		{ id: 0, title: "Home", link: "/" },
		{ id: 1, title: "공지사항", link: "/notice" },
		{ id: 2, title: "자유게시판", link: "/bbs" },

		// user에 userid 정보가 있으면
		user?.userid 
		 ?{id:3, title: "로그아웃", link: "/logout", align:true}
		 :{ id: 3, title: "로그인", link: "/login", align: true },
		user?.userid
		?{id: 4, title: "마이페이지",  link:"/mypage"}
		:{ id: 4, title: "회원가입", link: "/join" },
		{ id: 5, title: "회원정보보기", link: "/admin" },
	  ];

	return (
     		 <MainNav NavList={NavList}>

				<Route path="/" exact>	
						<div>홈 화면</div>
				  </Route>

				  <Route path="/notice" exact>
					 	<AuthRoute>
							<Notice/>
						</AuthRoute>
				  </Route>

				  <Route path="/bbs" exact>	
				  		<AuthRoute>
							<BBs/>
						</AuthRoute>
				  </Route>

	  			<Route path="/login" exact>
					<LoginForm/>
				</Route>
		
				<Route path="/join" exact>
					<JoinForm/>
				</Route>

				<Route path="/logout" exact>
						<LogOut/>
				</Route>

				<Route path="/admin" exact>
					<AuthRoute>
						<Admin role={user.role}/>
					</AuthRoute>
				</Route>
		
	 		 </MainNav>
	);
};

export default MainComp