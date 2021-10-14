import {useState} from "react";

/**
 *
 * @param initial {*} initial data
 * @function handleChangeData
 * @return {[data, handleChangeData]}
 */
const useSetValueHook = (initial) => {
	const [data, setData] = useState(initial)

	const handleChangeData = (e) => {
		const value = e.target.value
		setData(value)
	}

	return [data, handleChangeData]
}

export default useSetValueHook