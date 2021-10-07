import React, { useEffect } from "react";
import {useHistory} from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
function BBs() {
	const {user, setUser} = useUserContext();
	const history = useHistory();

	useEffect(() => {
		const fetchData = async() => {
		 	const res = await fetch("http://localhost:8080/users", 
			{
				method: "POST",
				headers: { 
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin" : "http://localhost:3000",
				},
				credentials: "include",

			});
			const result = await res.json();
			await setUser(result);

		};
		fetchData();
	}, []);

	// 유저 정보가 없으면 
	if(!user.userid) {

		// 로그인 화면으로 점프
		history.replace("/login");
	}

	return (
		<div>
			<h1>자유게시판</h1>
		</div>
	)
}

export default BBs