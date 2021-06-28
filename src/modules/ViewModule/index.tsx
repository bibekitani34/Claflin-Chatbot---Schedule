import React from "react";

import Feedback from "../../components/Feedback";
import Reader from "../../components/Reader";
import Thanks from "../../components/Thanks";
import Video from "../../components/Video";

import { useRecoilValue } from "recoil";
import { urlState } from "../../data/url.atom";
import { playbackState } from "../../data/playback.atom";
import { feedbackState } from "../../data/feedback.atom";

function ViewModule() {
	const videoUrl = useRecoilValue(urlState);
	const playback = useRecoilValue(playbackState);
	const feedback = useRecoilValue(feedbackState);

	return (
		<>
			{!videoUrl || !videoUrl.url?.length ? ( // not scanned
				<Reader />
			) : playback === "finished" ? ( // video finished playing
				feedback.status === "loaded" ? ( // video finished playing and feedback is submitted
					<Thanks /> // feedback has been submitted
				) : (
					<Feedback /> // video has finished playing
				)
			) : (
				<Video /> // video still playing
			)}
		</>
	);
}

export default ViewModule;
