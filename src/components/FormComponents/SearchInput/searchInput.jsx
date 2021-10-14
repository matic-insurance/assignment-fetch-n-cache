import classes from "./searchInput.module.css";
import {Input, TextButton} from "../index";
import React, {useEffect} from "react";
import useSetValueHook from "../../../hooks/useSetValue.hook";
import localStorageHelpers from "../../../helpers/localStorage.helpers";

/**
 *
 * @param handleSubmit {Function} submit  search
 * @param setActiveChar {Function|false} try to find char into cache
 * @return {JSX.Element}
 */
const SearchInput = ({handleSubmit, setActiveChar}) => {
	const [searchValue, setSearchValue] = useSetValueHook('')

	useEffect(() => {
		if (setActiveChar) {
			findCharInCache()
		}
	}, [searchValue])

	const findCharInCache = () => {
		const char = localStorageHelpers.find('charCache', +searchValue)
		if (char) setActiveChar(char)
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit.bind(this, searchValue)}>
			<Input placeholder={'Enter any number'} value={searchValue} handleChange={setSearchValue}/>
			<div className={classes.buttonWrapper}>
				<TextButton text={'Search'} inactive={!searchValue}/>
			</div>
		</form>
	)
}

export default SearchInput