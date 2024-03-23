import React from 'react'
import RenderedComp from './RenderedComp';

export default function LooperComp () {
    const divData = [
            {
                "num" : 1,
                "name" : "Johnny-Div"
            },{
                "num" : 2,
                "name" : "Danny-Div"
            },{
                "num" : 3,
                "name" : "Manny-Div"
            },{
                "num" : 4,
                "name" : "Granny-Div"
            }
        ];
    let divLooped = divData.map(divs => <RenderedComp key={divs.num} divDB = {divs} />)

    return (
        <div>
            {divLooped}
        </div>
    )
}