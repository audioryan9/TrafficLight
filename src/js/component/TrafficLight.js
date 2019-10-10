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

<>
<div>
    <div id="mainLight"  class="mainLite">aaaa
        <span id="greenOne" class= "green1"> grn </span>
        <span id="yellowOne" class= "yellow1"> yell </span>
        <span id="redOne" class= "red1"> red </span>
    </div>
                <div id="walkLight"  class="walkLite">wlklite
                    <span id="walk" class= "walk"> wlk </span>
                    <span id="doNotWalk" class= "doNotWalk"> don't </span>
                </div>

                        <div id="configBox"  class="configBoxx">enable or disbale
                            <span id="walk" class= "walk"> wlk </span>
                            <span id="doNotWalk" class= "doNotWalk"> don't </span>
                        </div>

</div>
</>

function TrafficLight(){
const [mainLight , setMainLight] = useState ([]);

    return(
        <div className= "Lite">
            <img src= {} className="App-logo" alt="logo"/>
                <button onMouseOver={} />
            <p>
                Lights being changed: {mainLight.toString()}
            </p>
        </div>



    );
 }

export default TrafficLight;
