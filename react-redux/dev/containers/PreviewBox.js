import React from "react"
import {PreviewText}        from "../components/LiText.js"
import {PreviewTextarea}    from "../components/LiTextarea.js"
import {PreviewRadio}       from "../components/LiRadio.js"
import {PreviewNumber}      from "../components/LiNumber.js"
import {PreviewEmail}       from "../components/LiEmail.js"
import {PreviewIphone}      from "../components/LiIphone.js"
import {PreviewPosition}    from "../components/LiPosition.js"
import {PreviewTime}        from "../components/LiTime.js"
import {PreviewWx}          from "../components/LiWx.js"
const PreviewBox=({data,actions})=>{
    return (
        <div className="previewBox">
            {data.map(el=>{
                switch(el.type){
                    case "text":
                        return <PreviewText key={el.id} data={el} actions={actions} />
                    case "textarea":
                        return <PreviewTextarea  key={el.id} data={el} actions={actions} />
                    case "radio":
                        return <PreviewRadio  key={el.id} data={el} actions={actions} />
                    case "checkbox":
                        return <PreviewCheckbox  key={el.id} data={el} actions={actions} />
                    case "number":
                        return <PreviewNumber  key={el.id} data={el} actions={actions} />
                    case "iphone":
                        return <PreviewIphone  key={el.id} data={el} actions={actions} />
                    case "position":
                        return <PreviewPosition  key={el.id} data={el} actions={actions} />
                    case "email":
                        return <PreviewEmail  key={el.id} data={el} actions={actions} />
                    case "time":
                        return <PreviewTime  key={el.id} data={el} actions={actions} />
                    case "wx":
                        return <PreviewWx  key={el.id} data={el} actions={actions} />
                    default: 
                        return 
                }
            })}
        </div>
    )
}
export const updateTop=()=>{
      var $allDiv=document.querySelectorAll('.previewItem')
      var $currentDiv=document.querySelector('.previewItem.active')
      var top=$currentDiv.getBoundingClientRect().top+parseInt(getComputedStyle($currentDiv).height)/2-49;
      if([].indexOf.call($allDiv,$currentDiv)==0){top=0}
      document.querySelector('.sfForm_editBox').style.cssText="top:"+top+"px"
}

export default PreviewBox