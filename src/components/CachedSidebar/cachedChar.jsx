import React from "react";
import classes from "./charCahed.module.css";

/**
 *
 * @param isActive {boolean}
 * @param char {Object}
 * @param setActiveChar {Function}
 * @param deleteChar {Function}
 * @return {JSX.Element}
 */
const CachedChar = ({isActive, char, setActiveChar, deleteChar}) => {
	const {image, id} = char
	return (
		<div
			className={`${classes.imageContainer} ${isActive ? classes.active : ''}`}
		>
			<DeleteButton handleClick={() => deleteChar(id)}/>
			<img src={image} alt={''} onClick={() => setActiveChar(char)}/>
		</div>
	)
}

export default CachedChar

/**
 *
 * @param handleClick {Function}
 * @return {JSX.Element}
 */
const DeleteButton = ({handleClick}) => (
	<div className={classes.deleteButton} onClick={handleClick}>
		<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="times-circle" role="img"
				 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
		>
			<path fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"
			/>
			<path
						d="M377.6 321.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"
			/>
		</svg>
	</div>

)