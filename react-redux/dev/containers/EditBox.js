import React            from "react"
import {EditText}       from "../components/LiText.js"
import {EditTextarea}   from "../components/LiTextarea.js"
import {EditRadio}      from "../components/LiRadio.js"
import {EditNumber}     from "../components/LiNumber.js"
import {EditEmail}      from "../components/LiEmail.js"
import {EditIphone}     from "../components/LiIphone.js"
import {EditPosition}   from "../components/LiPosition.js"
import {EditTime}       from "../components/LiTime.js"
import {EditWx}         from "../components/LiWx.js"
const EditBox=({data,actions,isNone})=>{
    var tmp=null;
    var active=data.filter(el=>
            el.active
        )
    if(active.length){
        active=active[0]
        switch(active.type){
            case "text":         tmp=<EditText data={active} actions={actions}/>;break
            case "textarea":     tmp=<EditTextarea data={active} actions={actions}/>;break
            case "radio":        tmp=<EditRadio data={active} actions={actions} isNone={isNone}/>;break
            case "checkbox":     tmp=<EditCheckbox data={active} actions={actions} isNone={isNone}/>;break
            case "select":       tmp=<EditSelect data={active} actions={actions} isNone={isNone}/>;break
            case "number":       tmp=<EditNumber data={active} actions={actions}/>;break
            case "email":        tmp=<EditEmail data={active} actions={actions} />;break
            case "iphone":       tmp=<EditIphone data={active} actions={actions}/>;break
            case "position":     tmp=<EditPosition data={active} actions={actions}/>;break
            case "time":         tmp=<EditTime data={active} actions={actions}/>;break
            case "wx":           tmp=<EditWx data={active} actions={actions}/>;break
            default:break
        }
    }
    return ( <div>
                { tmp}
            </div>
    )
}
export default EditBox