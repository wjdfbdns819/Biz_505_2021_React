import React, { useRef, useState } from "react";
import "../css/LoginForm.css";

function LoginForm() {

	const userInput = useRef();
	const passwordInput = useRef();

	const [account, setAccount] = useState({

		userid: "",
		password: "",
	});

	const onChange = (e) => {

		setAccount({ ...account, [e.target.name]: e.target.value});
	}

	const onLogin = async (e) => {
		console.log(account.userid);
		console.log(account.password);
		const res = await fetch("http://localhost:8080/users/login", 
			{
				method : "POST",
				headers : {
						"Content-Type" : "application/json"
				},
				credentials : "same-origin",
				body : JSON.stringify({
					userid : account.userid,
					password : account.password,
				}),

				
		});

			
			// 아이디 또는 비번이 비어있으면 다시 입력받는 코드 작성
			if(account.userid === "") {
				alert("아이디를 입력해주세요");
				userInput.current.focus();
				return

			} 
			if(account.password === "") {
				alert("비밀번호를 입력해주세요");
				passwordInput.current.focus();
				return

			} 
	

		// 서버로부터 정상적인 응답이 오면
		// 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefinded 또는 null 값이다
		// if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
		// res가 정상이 아닐때는 res.ok에서 오류가 발생한다 
		// ES6 버전에서 safe null 검사를 수행하는 코드가 있다
		// res가 정상(null, undefined가 아니면, .ok 속성을 검사하라)
		//  null로 인한 오류를 방지하는 코드이다
		if(res?.ok) {
			const user = await res.json();

			// 유저 id가 있는지 확인(DB에 데이터가 존재하는 user 정보인지 확인)
			//const user = users.find((item) => {
			//	return item.userid === account.userid;
			//});

			console.log("user", user);

			// 일치하지 않는 id 일 경우 (존재하지 않는 id일 경우)
			if(user.userid !== account.userid) {
				alert("아이디가 없음");
				return
			}

			// 일치하지 않는 pw 일 경우(존재하지 않는 pw일 경우)
			 if(user.password !== account.password) {
				alert("비번 오류")
				return
			}

			alert("로그인 성공")
		
		}

	};

  return (
    <div className="login_form">
      <input name="userid"	
	  		 onChange={onChange}
			   value={account.userid}
			   ref={userInput}
	  			placeholder="아이디를 입력해주세요" />

      <input name="password"
	  			ref={passwordInput}
				  value={account.password}
	  		 onChange={onChange}
	  			 placeholder="비밀번호를 입력해주세요" />

      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
