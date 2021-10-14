import React from "react";
import classes from './charCahed.module.css'
import {TextButton} from "../FormComponents";
import localStorageHelpers from "../../helpers/localStorage.helpers";
import CachedChar from "./cachedChar";

/**
 *
 * @param activeId {number} id of active char
 * @param cachedData {Array} cached data
 * @param refreshCachedState {Function} refresh cached state
 * @param setActiveChar {Function} set active char from cache
 * @return {JSX.Element|null}
 */
const CachedSidebar = ({activeId, cachedData, refreshCachedState, setActiveChar}) => {

	const clearCache = () => {
		localStorageHelpers.clear('charCache')
		refreshCachedState()
	}

	/**
	 *
	 * @param charId {number}
	 */
	const deleteSingle = (charId) => {
		let data = [...cachedData]
		data.splice(
			data.findIndex(({id}) => id === charId),
			1
		)
		localStorageHelpers.set('charCache', data)
		refreshCachedState()
	}

	if (!Object.keys(cachedData).length) return null
	return (
		<>
			<TextButton text={'Clear All'} onClick={clearCache}/>
			<div className={classes.cardWrapper}>
				{
					cachedData.map((item, i) => (
						<CachedChar
							char={item}
							isActive={activeId === item.id}
							deleteChar={deleteSingle}
							setActiveChar={setActiveChar}
							key={`charImage_${i}`}
						/>
					))
				}
			</div>
		</>
	)
}

export default CachedSidebar
