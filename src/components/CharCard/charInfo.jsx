import React from "react";
import classes from "./charCard.module.css";

/**
 *
 * @param name {string}
 * @param species {string}
 * @param type {string}
 * @param status {string}
 * @param locationName {string}
 * @param originName {string}
 * @return {JSX.Element}
 */
const CharInfo = ({
	name,
	species,
	type,
	status,
	location: {name: locationName},
	origin: {name: originName}
}) => {
	return (
		<div className={classes.charInfoContainer}>
			<h1>{name}</h1>
			<div className={classes.charInfoRow}>
				<span>Species</span><ValueWithStatus value={species}/>
			</div>
			<div className={classes.charInfoRow}>
				<span>Type</span><ValueWithStatus value={type}/>
			</div>
			<div className={classes.charInfoRow}>
				<span>Location</span><ValueWithStatus value={locationName}/>
			</div>
			<div className={classes.charInfoRow}>
				<span>Origin</span><ValueWithStatus value={originName}/>
			</div>
			<div className={classes.charInfoRow}>
				<span>Status</span><ValueWithStatus value={status}/>
			</div>
		</div>
	)
}

export default CharInfo

/**
 *
 * @param value {string}
 * @return {JSX.Element}
 */
const ValueWithStatus = ({value = ''}) => {
	const checkedValue = value || 'unknown';
	return	<span className={setStatus(checkedValue)}>{checkedValue}</span>
}

/**
 *
 * @param value {string}
 * @return {string|CSSModuleClasses}
 */
const setStatus = (value) => {
	switch (value.toLowerCase()) {
		case 'unknown': return classes.grey
		case 'dead': return classes.red
		case 'alive': return classes.green
		default: return ''
	}
}