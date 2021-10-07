const fetchLogin = async (userid, password) => {
	const response = await fetch("http://localhost:8080/users/login", 
			{
				method : "POST",
				headers : {
						"Content-Type" : "application/json",
						"Access-Control-Allow-Origin" : "http://localhost:3000",
				},
				credentials: "include",
				body : JSON.stringify({
					userid, 
					password,
				}),
			});

			if(response?.ok) {

				const resultUser = response.json();
				return resultUser;
			} else {
				return [];
			}
};


const fetchJoin = async (joinData) => {
		/* React 와 Nodejs 간에 데이터를 주고 받기 위해 하는 함수 */
			// React에서 입력한 데이터를 Nodejs(서버)로 보내기
			const response = await fetch("http://localhost:8080/users/join",

			{
				// json 방식으로 데이터 보내기
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				},
				// 문자열로 변환하여 json 타입으로 저장?쨌든 담는다
				body : JSON.stringify(joinData),
			})

		// Nodejs에서 데이터를 성공적으로 받았을 때 실행할 코드
		if(response.ok) {
				const result = await response.json();
				//alert(JSON.stringify(json));
				return result;
			}
}

const fetcUser = async () => {
	const response = await fetch("http://localhost:8080/users", 
		{
			method : "POST",
			headers : {
					"Content-Type" : "application/json",
					"Access-Control-Allow-Origin" : "http://localhost:3000",
			},
			credentials: "include",
		});
		return response.json();
}

const fetchLogout = async () => {
	const response = await fetch("http://localhost:8080/users/logout", 
	{
		method : "POST",
		headers : {
				"Content-Type" : "application/json",
				"Access-Control-Allow-Origin" : "http://localhost:3000",
		},
		credentials: "include",	
});
return response.json();

};

export {fetchJoin, fetchLogin, fetcUser, fetchLogout};