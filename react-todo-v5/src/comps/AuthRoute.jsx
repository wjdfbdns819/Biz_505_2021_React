import {useUserContext} from "../context";
import {useHistory} from "react-router-dom";
import {useEffect, useCallback} from "react";
import {fetchUser} from "../modules/fetchModule"

function AuthRoute({children}) {

	const {user, setUser} = useUserContext();
	const history = useHistory();

	const fectchCallback = useCallback( async () => {

		const resultUser = await fetchUser();

		// resultUser에 userid가 없으면
		if(resultUser?.userid) {

			alert("틀렸음")
			history.replace("/login");
			
		}
		setUser(resultUser);
	})

	useEffect(fectchCallback, [fectchCallback])
	return <>{children}</>
}

export default AuthRoute