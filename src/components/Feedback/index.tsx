import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { feedbackState } from "../../data/feedback.atom";
import { scanIdState } from "../../data/scanId.atom";
import { userState } from "../../data/user.atom";
import { emojis } from "../../utils/emojis";

import "./styles.css";

function Feedback() {
	const setFeedbackState = useSetRecoilState(feedbackState);
	const userId = useRecoilValue(userState);
	const scanId = useRecoilValue(scanIdState)

	const submitFeedback = async (key: number) => {
		try {
			setFeedbackState({
				feedback: null,
				status: "loading",
				error: "",
			});

			await fetch("/api/feedback", {
				method: "POST",
				body: JSON.stringify({ feedback: key, user: userId, scanId: scanId }),
			});

			setFeedbackState({
				feedback: key,
				status: "loaded",
			});
		} catch (ex) {}
	};

	return (
		<div className="feedback">
			<div className="field">
				<h2>How was your device setup experience?</h2>
				<ul>
					{emojis.map((item, i) => (
						<li key={i}>
							<img
								src={item}
								alt={`emoji ${i}`}
								onClick={() => {
									submitFeedback(i);
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Feedback;
