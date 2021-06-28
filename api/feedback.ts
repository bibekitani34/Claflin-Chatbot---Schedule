import { VercelApiHandler } from "@vercel/node";
import { db } from "./utils/firebase";

const feedbackMap = ["love", "happy", "neutral", "not-satisfied", "shun"]; // type of feedbacks

interface FeedbackInterface {
	feedback: number;
	user: string;
	scanId: string;
}
const feedback: VercelApiHandler = async (req, res) => {
	try {
		// validate HTTP method
		if (req?.method.toUpperCase() !== "POST")
			return res.status(405).json({ error: "Method not allowed." });

		// extract payload
		const {
			feedback: f,
			user,
			scanId,
		}: FeedbackInterface = JSON.parse(req?.body || {});

		// verify payload
		if (f >= 5 || f < 0 || !user || !scanId) {
			res.status(400).json({ error: "Bad Request." });
			return;
		}

		// invoke database
		const rec = await db.collection("feedbacks").add({
			feedback: feedbackMap[f],
			user,
			timestamp: Date.now(),
			scanId,
		});

		// respond
		res.json({ message: "Thank you for the feedback.", id: rec.id });
	} catch (ex) {
		console.log({ ex });
		res.status(500).json({ error: "Something went wrong." });
	}
};

export default feedback;
