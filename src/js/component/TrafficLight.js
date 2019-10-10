import React from "react";

function TrafficLight() {
	//const [mainLight, setMainLight] = useState([]);

	return (
		<div>
			<div id="mainLight" className="mainLite">
				<div id="green" className="green1">
					{" "}
					grn{" "}
				</div>
				<div id="yellow" className="yellow1">
					{" "}
					yell{" "}
				</div>
				<div id="red" className="red1">
					{" "}
					red{" "}
				</div>
			</div>

			<div id="walkLight" className="walkLite">
				<span id="walk" className="walk" />
				<span id="doNotWalk" className="doNotWalk" />
			</div>

			<div id="configBox" className="configBoxx">
				enable or disbale
				<span id="walk" className="walk" />
				<span id="doNotWalk" className="doNotWalk" />
			</div>
		</div>
	);
}

export default TrafficLight;
