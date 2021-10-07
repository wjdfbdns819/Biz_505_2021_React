import React from "react";

/**
 * props 전달받은 변수에 기본값을 지정하여
 *  props 값이 전달되지 않더라도 기본을 설정할수 있도록 기본값 설정하기
 */
function Button ({childern, backgroundColor="blue", color="fff", onClick}) {

	// 다른 컴포넌트 안에 버튼 style간의 충돌을 피하기 위해 
	//  css 파일보단 컴포넌트 안에 style을 지정하는 것이 좋다
	const MyButtonStyle = {
	fontSize: "18px",
	fontWeight: "700",
	width: "60%",

	/*height와 line-height 부분을 똑같은 값으로 설정하면 text가 중앙에 위치한다*/
	height: "50px",
	lineHeight: "50px",	
	margin: "10px auto",
	cursor: "pointer",
	textAlign: "center",
	color: color,
	border: "none",
	borderRadius: "5px",
	backgroundColor: backgroundColor,
	};

	return (
		<button style={MyButtonStyle} onClick={onClick}>{childern}</button>
	);
};

export default Button