import {useState} from "react";

/**
 *
 * @param service {function} api request function
 * @param initial {any} initial state
 * @return {[Object, Object]}
 */
const useGetApiDataHook = ({service = () => false, initial = ''}) => {
	const [data, setData] = useState(initial)
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState(false)

	/**
	 *
	 * @param link {string} additional part of link for api request
	 * @param callback {Function}
	 * @return {Promise<void>}
	 */
	const getData = async (link = '', callback = () => false) => {
		setLoading(true)
		const result = await service(link)
		
		if (result) {
			setData(result)
			setErr(false)
			callback(result)
		} else {
			setErr(true)
		}

		setLoading(false)
	}

	return [{data, loading, err}, {getData, setData}]
}

export default useGetApiDataHook