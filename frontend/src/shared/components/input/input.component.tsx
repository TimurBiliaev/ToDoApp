import React from "react";
import { FieldInputProps } from 'react-final-form';

type inputProps = {
	input: FieldInputProps<string>,
	meta : any
}

export const Input: React.FC<inputProps> = ({ input, meta }) => (
	<div>
		<input {...input} />
		{meta.touched && meta.error && <span>{meta.error}</span>}
	</div>

)