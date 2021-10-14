import React from "react";
import classes from './button.module.css'

/**
 *
 * @param onClick {Function}
 * @param text {string} button text
 * @param inactive {boolean}
 * @return {JSX.Element}
 */
const TextButton = ({
	onClick = () => false,
	text = '',
	inactive = false
}) => {
	return (
		<button
			onClick={onClick}
			className={`${classes.button} ${inactive ? classes.inactive : ''}`}
		>
			{text}
		</button>
	)
}

export default TextButton