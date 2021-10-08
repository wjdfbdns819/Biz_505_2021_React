import React from "react";
import TodoMain from "./TodoMain";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

import {useUserContext} from "../context/UserContextProvider";


function TodoPlus () {

	 const { user } = useUserContext();

	return (
		<div>
			<h3>user id : {user.userid}</h3>
			<TodoMain header="금요일에 할일" form={<TodoInput />}>
				<TodoList />
			</TodoMain>
		  </div>
	)
}

export default TodoPlus