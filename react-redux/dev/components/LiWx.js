import React,{Component} from "react"
import render from "react-dom"
import {updateTop} from "../containers/PreviewBox.js"
export const LiWx=({onclick})=>{
    return( 
        <li onClick={()=>{onclick("WX")}}>微信扫码</li>
    )
}
export const PreviewWx=({data,actions})=>{
    return <div className={data.active?"previewItem active":"previewItem"} onClick={()=>{actions.clickPreviewLi(data.id)}}>
              <div className="title">{data.title}<span className="red ml5">{data.required?"*":""}</span></div>
              <div className="readOnly"><input type="text" disabled="disabled" value={data.default} placeholder={data.tis}/></div>
              <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
              <div className="cz">
                   <i className="fa fa-plus-circle addBtn" title="复制" onClick={(e)=>{e.stopPropagation();actions.oncopy(data.id)}}></i>
                   <i className="fa fa-minus-circle delBtn" title="删除" onClick={(e)=>{e.stopPropagation();actions.ondelete(data.id)}}></i>
              </div>
           </div>
}
export class EditWx extends Component{
    constructor(props, data) {
        super(props, data)
    }
    componentDidMount(){
        updateTop()
    }
    componentDidUpdate(){
        updateTop()
    }
    render(){
    let data=this.props.data;
    let actions=this.props.actions;
    let title,defaultinput,tis,minValue,maxValue,required,readonly
    return <div className="fieldEdit textFieldEdit">
             <div className="title"><i className="fa fa-edit"></i>微信扫码</div>
             <div className="edit_item">   
                 <div className="tit">标题</div>   
                 <div className="write"> 
                      <input type="text" className="sf-tit-value" ref={el=>{title=el}} name="tit_value" value={data.title} onChange={()=>{actions.changeValue("title",title.value,data.id)}} placeholder="未命名"/>
                 </div>
             </div>
             <div className="edit_item">   
               <div className="tit">校验</div>   
               <div className="write">     
                   <ul>     
                       <li className=""><label className="checkbox"><input type="checkbox" ref={el=>{required=el}} 
                       onChange={()=>{actions.changeValue("required",required.checked,data.id)}} checked={data.required}/>必须填</label></li>       
                   </ul>   
               </div>
            </div>
        </div>
    }
}