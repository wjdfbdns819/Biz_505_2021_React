const fetchLogin = async (userid, password) => {

	const res = await fetch("http://localhost:8080/users/login",
		{
			method : "POST",
			headers : {
						"Content-Type" : "application/json",
						"Access-Control-Allow-Origin" : "http://localhost:3000",
			},
			credentials : "include",
			body : JSON.stringify({
						userid,
						password,
			}),
		}); // fech end

		 if(res?.ok) {
			const resultUser = res.json();
			return resultUser;
		} else {
			
			return [];
			
		}

}; // fechLogin end


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

export {fetchLogin, fetchLogout, fetcUser};