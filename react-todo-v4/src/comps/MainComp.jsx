import React  from "react";
import {Route} from "react-router-dom";
import MainNav from "./MainNav";
import AuthRoute from "./AuthRoute";
import LoginForm from "./LoginForm";
import LogOut from "./LogOut";
import { useUserContext } from "../context/UserContextProvider";
import TodoPlus from "./TodoPlus";

function MainComp() {

	const {user} = useUserContext();

	const NavList = [
		user?.userid 
		?{ id : 0, title : "로그아웃", link: "/logout", align:true}
		:{ id : 0, title : "로그인", link: "/", align:true},
	
		{ id : 1, title : "Todo", link: "/todo"},
		
	];

	return (

		<MainNav NavList={NavList}>

			<Route path="/" exact>
				<LoginForm/>
			</Route>

			<Route path="/logout" exact>
				<LogOut/>
			</Route>

			<Route path="/todo" exact>
				<AuthRoute>
					<TodoPlus/>
				</AuthRoute>
			</Route>

		</MainNav>

	);
};

export default MainComp