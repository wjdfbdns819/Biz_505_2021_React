import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

function LogOut() {

	const history = useHistory();
	const {setUser} = useUserContext();
	useEffect(() => {
		const logout = async () => {
			const res = await fetch("http://localhost:8080/users/logout", 
			{
				method : "POST",
				headers : {
						"Content-Type" : "application/json",
						"Access-Control-Allow-Origin" : "http://localhost:3000",
				},
				credentials: "include",	
		});
		
		await setUser([]);
		history.replace("/login");
		};
		logout();
	}, []);

	return<div></div>; 

};

export default LogOut