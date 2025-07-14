import React from "react";

type buttinProps = {
	label: String;
	onClick?: () => void;
}


const Button: React.FC<buttinProps> = ({ label, onClick }) => {
	return (
		<button  onClick={onClick}>{label}</button>
	)
}

export default Button