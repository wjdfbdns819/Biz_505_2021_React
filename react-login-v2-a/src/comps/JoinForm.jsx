import React, { useState } from "react";
import "../css/JoinForm.css";
import { fetchJoin } from "../modules/fetchMoule";
import { useHistory } from "react-router-dom"

function JoinForm () {

	const [joinUser, setJoinUser] = useState({

		userid: "",
		password: "",
		re_password: "",
		email: "",

	});

	const history = useHistory();

		// 회원가입 input에 사용할 event 함수
	const onChangeAccount = (e) => {
		
			const {name,value} = e.target;
	
			setJoinUser({...joinUser, [name]: value});
		
		};


		// input에 데이터를 입력하고 button을 눌렀을때 
	// 	or 데이터를 입력하지 않고 or pw와 re_pw의 정보 값이 같은지 
	//	 비교하고 button을 눌렀을때 실행되는 event 함수
		const onsubmitAccount = async () => {

			// if(user.userid === "") { 를 아래와 같이 쓸 수 있다
			// user에 userid 값이 비어 있으면
			if(!joinUser?.userid) {

				alert("아이디를 입력해야 합니다");
				return
			}

			if(!joinUser?.password) {
				alert("비밀번호를 입력해야 합니다");
				return
			}
			
			if(!joinUser?.re_password) {
				alert("비밀번호확인을 입력해주세요");
				return
			}

			if(joinUser.password !== joinUser.re_password) {
				alert("비밀번호와 비밀번호 확인이 일치하지 않습니다")
				return
			}
			
			if(!joinUser?.email) {
				alert("이메일 주소는 필수 항목입니다");
				return
			}

					// 서버로 보낼 데이터를 미리 준비하기
					const joinData = {
						userid : joinUser.userid,
						password : joinUser.password,
						email : joinUser.email
					};

					fetchJoin(joinData);
					history.replace("/login");
		};

	

		

	return (
	
		<div className="join_form">
			<input name="userid" value={joinUser.userid} 
				onChange={onChangeAccount}  placeholder="아이디를 입력해주세요"/>

			<input  name="password" value={joinUser.password}  
				onChange={onChangeAccount}  placeholder="비밀번호를 입력해주세요"/>

			<input  name="re_password" value={joinUser.re_password}  
				onChange={onChangeAccount}  placeholder="비밀번호를 한번 더 입력해주세요"/>

			<input  name="email" value={joinUser.email}  
				onChange={onChangeAccount}  placeholder="E-mail을 입력해주세요"/>

			<button onClick={onsubmitAccount}>회원가입</button>
		</div>
	);
};

export default JoinForm