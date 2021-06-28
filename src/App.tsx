import React from "react";
import logo from "./assets/logo.svg";

import "./styles/globalStyles.css";

import ViewModule from "./modules/ViewModule";

import { RecoilRoot } from "recoil";
function App() {
	return (
		<RecoilRoot>
			<main>
				<ViewModule />
			</main>
			<footer>
				<img src={logo} alt="logo" />
			</footer>
		</RecoilRoot>
	);
}

export default App;
