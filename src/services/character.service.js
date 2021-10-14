/**
 *
 * @param id {string} character id
 * @return {Promise<any|boolean>}
 */
const getCharacter = async (id) => {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
	return response.ok ? await response.json() : false
}

const characterServices = {
	get: getCharacter
}

export default characterServices