/**
 *
 * @param field {string} storage key
 * @param value {*} storage value
 * @return {void}
 */
const setJSONItem = (field = '', value) =>
	localStorage.setItem(field, JSON.stringify(value));

/**
 *
 * @param field {string} storage key
 * @return {any}
 */
const getJSONItem = (field = '') =>
	JSON.parse(localStorage.getItem(field));

/**
 *
 * @param field {string}
 * @param searchElId {number}
 * @return {Object|boolean}
 */
const findJSONItem = (field, searchElId) => {
	const storeItem = getJSONItem(field)
	return storeItem ?
		storeItem
			.find(el => el.id === searchElId)
		: false
}

/**
 *
 * @param data {*} data to set into arr
 * @param field storage key
 */
const setIntoArr = (data, field) => {
	setJSONItem(
		field,
		[
			data,
			...(getJSONItem(field) || []),
		]
	)
}
/**
 *
 * @param field storage key
 */
const clearStore = (field) => {
	localStorage.removeItem(field)
}

const localStorageHelpers = {
	get: getJSONItem,
	set: setJSONItem,
	find: findJSONItem,
	clear: clearStore,
	setIntoArr
}

export default localStorageHelpers