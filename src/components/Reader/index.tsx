import React from "react";

import isUrl from "is-url";
import QrReader from "react-qr-reader";

import { urlState } from "../../data/url.atom";
import { useRecoilState, useSetRecoilState } from "recoil";

import "./styles.css";
import { userState } from "../../data/user.atom";
import { scanIdState } from "../../data/scanId.atom";

function Reader() {
	const [videoUrl, setVideoUrl] = useRecoilState(urlState);
	const setUser = useSetRecoilState(userState);
	const setScanId = useSetRecoilState(scanIdState);

	const handleScan = async (data: string | null) => {
		try {
			if (
				videoUrl.url.length ||
				videoUrl.status === "loading" ||
				videoUrl.status === "loaded"
			)
				return;
			if (!data) return;

			const [id, scanId] = data.split(" ");

			setVideoUrl({ url: "", status: "loading" });
			const response = await fetch("/api/scan", {
				method: "POST",
				body: JSON.stringify({ id, scanId }),
			});

			const { asset: url }: any = await response.json();

			if (!isUrl(url)) return;

			setUser(id);
			setScanId(scanId);
			setVideoUrl({ url, status: "loaded" });
		} catch (ex) {}
	};

	return (
		<div className="reader">
			<div className="viewfinder">
				<QrReader
					// props
					showViewFinder={false}
					delay={1000}
					facingMode="environment"
					style={{ width: "100%" }}
					resolution={720}
					// events
					onError={(err) => {
						console.log({ err });
					}}
					onScan={handleScan}
					onImageLoad={(ev) => {
						console.log({ ev });
					}}
				/>
			</div>
		</div>
	);
}

export default Reader;
