import React from "react";
import {useUserContext} from "../context/UserContextProvider";
function Notice() {

	const { user } = useUserContext();

	return (
		<div>
			<h1>여기는 공지사항 :D</h1>
			<h3> USER ID : {user.userid}</h3>
		</div>
	);
};

export default Notice