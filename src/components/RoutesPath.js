import React from "react";

import { AboutUs } from "./AboutUs/AboutUs";
import { ClientCount } from "./ClientCount/ClientCount";
import { ClientReviews } from "./ClientReviews/ClientReviews";
import { GetInTouch } from "./GetInTouch/GetInTouch";
import { MatchedOffer } from "./MatchedOffer/MatchedOffer";
import { SponserList } from "./SponserList/SponserList";
import { WhySmarter } from "./WhySmarter.js/WhySmarter";

/**
* @author
* @function RoutesPath

**/

export const RoutesPath = (props) => {
	return (
		<div>
			<SponserList />
			<WhySmarter />
			<ClientCount />
			<MatchedOffer />
			<AboutUs />
			<ClientReviews />
			<GetInTouch />
		</div>
	);
};
