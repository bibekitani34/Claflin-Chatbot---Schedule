import { VercelApiHandler } from "@vercel/node";
import { db } from "./utils/firebase";

interface ScanInterface {
	id: string;
	scanId: string;
}
const scan: VercelApiHandler = async (req, res) => {
	try {
		// validate HTTP method
		if (req?.method.toUpperCase() !== "POST")
			return res.status(405).json({ error: "Method not allowed." });

		// extract payload
		const { id, scanId }: ScanInterface = JSON.parse(req?.body || {});

		// verify payload
		if (!id || !id.length || !scanId || !scanId.length) {
			res.status(400).json({ error: "Bad Request." });
			return;
		}

		// invoke database
		await db.collection("scans").add({ by: id, timestamp: Date.now() });
		const doc = await db.collection("qrdata").doc(scanId).get();

		// verify response
		if (!doc.exists) {
			res.status(404).json({ error: "No scan asset exist at the moment. Check back later." });
			return;
		}

		// respond
		res.json({ message: "Scan successful.", asset: doc.data().url });
	} catch (ex) {
		console.log({ ex });
		res.status(500).json({ error: "Something went wrong." });
	}
};

export default scan;
