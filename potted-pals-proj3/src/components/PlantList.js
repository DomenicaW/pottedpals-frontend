import React from "react"

// STYLE SHEETS 


// IMPORTED COMPONENTS 
import PlantCard from "./PlantCard.js"

function PlantList() {
    return (
        <div>
            <PlantCard type="SUCCULENT" name="Echveria elgans" description="A popular succulent with variable species that forms compact rosettes of spoon-shaped pale bluish-greenish leaves. have only minor differences in the size a"/>
            <PlantCard type="SUCCULENT" name="Blue Euphorbia" description="A succulent shrub with numerous erect stems and edges covered with paired stiff spines and tiny, short-lived leaves. It grows up to 5 feet (1.5 m) and spreads by rhizomes."/>
            <PlantCard type="SUCCULENT" name="Prickly Pear" description="A cactus that grows up to 6.6 feet tall as erect or spreading shrub with fleshy, dull green to grey-green stem segments. The edible fruits are purplish-red, egg-shaped."/>
            <PlantCard type="SUCCULENT" name="Organ Pipe Cactus" description="A cactus with several narrow stems that rise vertically, growing from a short trunk just above ground level. They rarely branch out but rather grow from the tip of the last growth."/>
        </div>
    )
}

export default PlantList