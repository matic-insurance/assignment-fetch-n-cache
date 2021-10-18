import React, {useEffect, useState} from "react";
import classes from "./mainPage.module.css";
import useGetApiDataHook from "../../hooks/useGetApiData.hook";
import characterServices from "../../services/character.service";
import {SearchInput} from "../../components/FormComponents";
import {CachedSidebar, CharCard} from "../../components";
import localStorageHelpers from "../../helpers/localStorage.helpers";

export default function MainPage() {
	const [cachedData, setCachedData] = useState([])

	useEffect(() => setDataFromCache(), [])

	const setDataFromCache = () => setCachedData(localStorageHelpers.get('charCache') || [])

	const [
		{data: charData, loading, err},
		{getData: getCharData, setData}
	] = useGetApiDataHook({
		service: characterServices.get,
		initial: {}
	})

	/**
	 *
	 * @param value {string} id of char
	 * @param e form event
	 */
	const handleSubmit = (value, e) => {
		e.preventDefault()
		const instanceInCache = localStorageHelpers.find('charCache', +value)
		instanceInCache ?
			setData(instanceInCache)
			:
			getCharData(value, cacheWorker)
	}

	/**
	 *
	 * @param data {Object} data to set into cache
	 * @return {void}
	 */
	const cacheWorker = (data) => {
		localStorageHelpers.setIntoArr(data, 'charCache')
		setDataFromCache()
	}

	return (
		<div className={classes.mainPageWrapper}>
			<div className={classes.row}>
				<div className={classes.mainPart}>
					<SearchInput handleSubmit={handleSubmit} setActiveChar={setData}/>
					<CharCard data={charData} loading={loading} err={err}/>
				</div>
				<div className={classes.rightSidebar}>
					<CachedSidebar
						refreshCachedState={setDataFromCache}
						activeId={charData.id}
						cachedData={cachedData}
						setActiveChar={setData}
					/>
				</div>
			</div>
		</div>
	)
}
