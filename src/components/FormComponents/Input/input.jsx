import React from 'react'
import classes from './input.module.css'

/**
 *
 * @param name {string}
 * @param placeholder {string}
 * @param value {string|number}
 * @param error {boolean}
 * @param handleChange {Function}
 * @return {JSX.Element}
 */
const Input = ({
	name = '',
	placeholder = '',
	value = '',
	error = false,
	handleChange = () => false,
}) => {
	return (
		<div className={`${classes.inputContainer} ${error ? classes.error : ""}`}>
			<input
				placeholder={' '}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
			/>
			<label htmlFor={name} className={classes.descriptionContainer}>
				<span className={`${classes.placeholder}`}>{placeholder}</span>
			</label>
		</div>
	)
}

export default Input