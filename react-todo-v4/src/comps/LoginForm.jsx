import React, { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import {fetchLogin} from "../modules/fetchModule";
import {useHistory} from "react-router-dom";


function LoginForm() {

	const history = useHistory();

	const {setUser} = useUserContext();

	const [ account, setAccount] = useState({
		userid : "",
		password: "",

	});

	const onChange = (e) =>{

		const {name, value} = e.target;

		setAccount({...account, [name] : value});
		console.log([name] , value)

	}

	const onLoginClick = async () => {
		// account에서 userid, password 추출
		const {userid, password} = account;

		// 아이디 또는 비번이 비어있으면 다시 입력받는 코드 작성
		if(account.userid === "") {
			alert("아이디를 입력해주세요");
			return

		} 
		if(account.password === "") {
			alert("비밀번호를 입력해주세요");
			return

		} 

		// fechLogin에 account에서 받은 userid와 password 정보를 전달
		const resultUser = await fetchLogin(userid, password);

		if(resultUser.userid !== account.userid || resultUser.password !== account.password) {
			alert("ID 또는 PW를 확인하세요")
			return
		}

			await setUser(resultUser)
			history.replace("/todo")
		

	}

	return (
		<div>
			<input name="userid"
			onChange={onChange} placeholder="ID를 입력해주세요"/>

			<input name="password" 
			onChange={onChange} 
		
			placeholder="PW를 입력해주세요" />

			<button onClick={onLoginClick}>로그인</button>
		</div>
	);
};

export default LoginForm