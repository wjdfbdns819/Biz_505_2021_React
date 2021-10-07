import React, { createContext, useContext,useState } from "react";

// 회원가입 event들을 Context에 옮기고 JoinForm에 간결하게 처리하기

// 컨텍스트 생성
const UserContext = createContext();

// 컨텍스트의 Store에 보관된 정보를 추출하기 위해 Hook 함수 선언
export const useUserContext = () => useContext(UserContext);

function UserContextProvider({children}) {

	// 회원가입에 사용할 데이터
	const [ user, setUser] = useState({
		userid : "",
		password : "",
		re_password : "",
		email : "",
	});



	// 사용할 변수들 간결하게 정리
	const propsStrore = {
		user, setUser
	}

	return (
		<UserContext.Provider value={propsStrore}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider