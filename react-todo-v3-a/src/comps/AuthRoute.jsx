import {useUserContext} from "../context";
import {useHistory} from "react-router-dom";
import {useEffect, useCallback} from "react";
import {fetchUser} from "../modules/fetchModule"

function AuthRoute({children}) {

	const {user, setUser} = useUserContext();
	const history = useHistory();

	const fectchCallback = useCallback( async () => {

		const resultUser = await fetchUser();

		if(resultUser?.userid) {

			await setUser(resultUser)
		}

		// 로그인이 되어있지 않으면
		if(!user?.userid) {

			// 로그인 페이지로 점프
			alert("권한 없음")
			history.replace("/login");
		}
	}, [setUser])

	useEffect(fectchCallback, [fectchCallback])
	return <>{children}</>
}

export default AuthRoute