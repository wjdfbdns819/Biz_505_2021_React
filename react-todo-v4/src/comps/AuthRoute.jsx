/**
 * 로그인을 수행해야 열어볼수 있는 페이지들을 통합 관리할 컴포넌트
 *  로그인을 수행해야 접근할 수 있는 Route 들을 모아서 관리
 */

import { useHistory } from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import {fetcUser} from "../modules/fetchModule"

const AuthRoute = ( {children} ) => {

	const {user,setUser} = useUserContext();
	const history = useHistory();

		// user state 정보가 정말 로그인한 정상사용자 인지 확인해야함
		const fetchCb = useCallback ( async () => {

			const resultUser = await fetcUser();
			// resultUser에 id가 있으면
			if(resultUser?.userid) {
	
				await setUser(resultUser)
				
			} 
		}, [setUser]);
		// 유저 정보가 없으면 즉 로그인을 안했다면
		if(!user.userid) {

			// 로그인 화면을 띄우면서 alert 창으로 로그인 하라고 알려줌
			alert("권한없음")
			history.replace("/")
		}
	
		//페이지가 열리려고 시도되면 자동으로 실행하도록
		useEffect(fetchCb, [fetchCb]);


	// <AuthRoute> 내용 </AuthRoute>
	return <>{children}</>;

};

export default AuthRoute