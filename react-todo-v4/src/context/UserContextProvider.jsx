import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({children}) {

	// 회원정보
	const [ user, setUser] = useState({

		userid : "",
		password : "",
		
	});

	const propsData = {
		user, setUser
	}

	return (
		<UserContext.Provider value={propsData}>{children}</UserContext.Provider>
	)
};

export default UserContextProvider

