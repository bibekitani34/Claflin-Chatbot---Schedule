import React from "react";
import Player from "react-player";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { playbackState } from "../../data/playback.atom";
import { urlState } from "../../data/url.atom";

import "./styles.css";

function Video() {
	const { url } = useRecoilValue(urlState);
	const setPlaybackState = useSetRecoilState(playbackState);

	return (
		<div className="video-player">
			<Player
				url={url}
				width="90%"
				onPlay={() => {
					setPlaybackState("playing");
				}}
				onEnded={() => {
					setPlaybackState("finished");
				}}
			/>
		</div>
	);
}

export default Video;
