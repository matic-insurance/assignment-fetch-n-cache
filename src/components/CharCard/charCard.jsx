import React from "react";
import classes from "./charCard.module.css";
import CharPhoto from "./charPhoto";
import CharInfo from "./charInfo";

/**
 *
 * @param err {boolean}
 * @param loading {boolean}
 * @param data {Object}
 * @return {JSX.Element}
 */
const CharCard = ({err, loading, data}) => {
	return (
		<div className={classes.charContainer}>
			<CharPhoto {...data} loading={loading} err={err}/>
			{
				err ?
					<h2 className={classes.red}>Character not found</h2> :
					Object.keys(data).length ?
						<CharInfo {...data}/> :
						null
			}
		</div>
	)
}

export default CharCard
