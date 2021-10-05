import React, { useRef, useState } from "react";
import "../css/JoinForm.css";

function JoinForm () {

	const [accountJoin, setAccountJoin] = useState(
		{
			userid : "",
			password : "",
			re_password: "",
			email : "",


		})

	const [accountJoinList, setAccountJoinList] = useState([])

	const onChange = (e) => {
		const [name, value] =  e.target.value;
		setAccountJoin({... accountJoin, [name] : value });
	}

	
	// ref 변수 선언
	const usInput = useRef();
	const pwInput  = useRef();
	const rePwInput  = useRef();
	const emailInput  = useRef();



	const onJoin = () => {

		if(accountJoin.userid === ""){
			alert("아이디를 입력해주세요")
			usInput.current.focus()
			return;
		}

		else if(accountJoin.password === ""){
			alert("비밀번호를 입력해주세요")
			pwInput.current.focus()
			return;
		}

		else if(accountJoin.re_password === ""){
			alert("비밀번호 확인을 입력해주세요")
			rePwInput.current.focus()
			return;
		}

		else if(accountJoin.email === ""){
			alert("이메일을 입력해주세요")
			emailInput.current.focus()
			return;
		}
		

		setAccountJoinList([...accountJoinList, accountJoin]);		
	}


	// 입력한 비밀번호가 다를때


	return (
		<div className="join_form">
			<input name="userid" onChange={onChange} ref={usInput} placeholder="아이디를 입력해주세요"/>
			<input  name="password" onChange={onChange}  ref={pwInput} placeholder="비밀번호를 입력해주세요"/>
			<input  name="re_password" onChange={onChange}  ref={rePwInput} placeholder="비밀번호를 한번 더 입력해주세요"/>
			<input  name="email" onChange={onChange} ref={emailInput} placeholder="E-mail을 입력해주세요"/>
			<button onClick={onJoin}>회원가입</button>
		</div>
	);
};

export default JoinForm