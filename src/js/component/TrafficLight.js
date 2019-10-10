import React from "react";


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
