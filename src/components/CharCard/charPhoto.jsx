import React from "react";
import classes from "./charCard.module.css";
import imgPlaceholder from "../../imgPlaceholder.png";
import {Loader} from "../index";

/**
 *
 * @param image {string}
 * @param loading {boolean}
 * @param err {boolean}
 * @return {JSX.Element}
 */
const CharPhoto = ({image, loading, err}) => {
	return (
		<div className={classes.charPhoto} style={{backgroundImage: `url(${imgPlaceholder})`}}>
			{
				loading ?
					<div className={classes.loaderWrapper}>
						<Loader/>
					</div>
					: !err && <img src={image} alt={''}/>
			}
		</div>
	)
}

export default CharPhoto