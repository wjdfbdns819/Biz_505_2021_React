import React from "react";
import "../css/LoginForm.css";
import { useState } from "react";
import {useUserContext} from "../context/UserContextProvider";

import {useHistory} from "react-router-dom";

import { fetchLogin } from "../modules/fetchMoule";

function LoginForm() {

	const history = useHistory();

	const {setUser} = useUserContext();

	const [account, setAccount] = useState({

		userid: "",
		password: "",
	});

	const onChange = (e) => {

		setAccount({ ...account, [e.target.name]: e.target.value});
	}

	const onLogin = async (e) => {

		// id와 pw를 추출
		const {userid, password} = account;

		// fetchLogin에 id와 pw 정보를 전달
		const resultUser = await fetchLogin(userid,password);

		await setUser(resultUser);
		history.replace("/");
	}
	
		

		
				
	

  return (
    <div className="login_form">
      <input name="userid"	
	  		 onChange={onChange}
			   value={account.userid}
	  			placeholder="아이디를 입력해주세요" />

      <input name="password"

				  value={account.password}
	  		 onChange={onChange}
	  			 placeholder="비밀번호를 입력해주세요" />

      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
