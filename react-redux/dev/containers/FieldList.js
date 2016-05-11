import React from "react"
import {LiText}       from "../components/LiText.js"
import {LiTextarea}   from "../components/LiTextarea.js"
import {LiRadio}      from "../components/LiRadio.js"
import {LiNumber}     from "../components/LiNumber.js"
import {LiEmail}      from "../components/LiEmail.js"
import {LiIphone}     from "../components/LiIphone.js"
import {LiPosition}   from "../components/LiPosition.js"
import {LiTime}       from "../components/LiTime.js"
import {LiWx}         from "../components/LiWx.js"
const FieldList=({onclick,clickFieldList})=>{
    return(
        <ul className="fieldList" style={{display:"none"}} onClick={()=>{clickFieldList()}}>
            <LiText onclick={onclick}/>
            <LiTextarea onclick={onclick} />
            <LiRadio onclick={onclick} />
            <LiNumber onclick={onclick} />
            <LiEmail onclick={onclick} />
            <LiIphone onclick={onclick} />
            <LiPosition onclick={onclick} />
            <LiTime onclick={onclick} />
            <LiWx onclick={onclick} />
        </ul>
    )
}
export default FieldList