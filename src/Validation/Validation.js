import React from 'react'

const Validation=(props)=>{
    
    let output=(
        <p>Text Too Short</p>
    )
    if(props.length>=5){
        output = (
            <p>Text Long Enough</p>
        )
    }

    return <div>{output}</div>;
}

export default Validation