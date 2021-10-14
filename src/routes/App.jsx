import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import {MainPage} from "../pages";

export default function App() {
	return (
		<Fragment>
			<Route path='/' component={MainPage}/>
		</Fragment>
	)
}

