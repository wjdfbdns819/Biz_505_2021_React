/**
 * 로그인을 수행해야 열어볼수 있는 페이지들을 통합 관리할 컴포넌트
 *  로그인을 수행해야 접근할 수 있는 Route 들을 모아서 관리
 */

import { useHistory } from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import {fetcUser} from "../modules/fetchMoule"

const AuthRoute = ( {children} ) => {

	const {setUser} = useUserContext();
	const history = useHistory();

		// user state 정보가 정말 로그인한 정상사용자 인지 확인해야함
		const fetchCb = useCallback ( async () => {

			const resultUser = await fetcUser();
			// resultUser에 id가 있으면
			if(resultUser?.userid) {
	
				await setUser(resultUser)
				
			} else {
	
				// 값이 없으면 login 페이지로 점프하도록 설정
				history.replace("/login")
			}
		}, [setUser]);
	
		//페이지가 열리려고 시도되면 자동으로 실행하도록
		useEffect(fetchCb, [fetchCb]);


	// <AuthRoute> 내용 </AuthRoute>
	return <>{children}</>;

};

export default AuthRoute