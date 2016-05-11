import React,{Component} from "react"
import render from "react-dom"
import {updateTop} from "../containers/PreviewBox.js"
export const LiNumber=({onclick})=>{
    return( 
        <li onClick={()=>{onclick("NUMBER")}}>数字</li>
    )
}
export const PreviewNumber=({data,actions})=>{
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
export class EditNumber extends Component{
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
             <div className="title"><i className="fa fa-edit"></i>数字</div>
             <div className="edit_item">   
                 <div className="tit">标题</div>   
                 <div className="write"> 
                      <input type="text" className="sf-tit-value" ref={el=>{title=el}} name="tit_value" value={data.title} onChange={()=>{actions.changeValue("title",title.value,data.id)}} placeholder="未命名"/>
                 </div>
             </div>
             <div className="edit_item">   
                 <div className="tit">默认值</div>   
                 <div className="write"> 
                 <input type="text" className="sf-default-value" ref={el=>{defaultinput=el}} name="default_value" value={data.default} onChange={()=>{actions.changeValue("default",defaultinput.value,data.id)}} />
                 </div>
             </div>
             <div className="edit_item">   
                 <div className="tit">提示</div>    
                 <div className="write"> 
                 <textarea id="" cols="30" rows="5" className="sf-tis-value" ref={el=>{tis=el}} name="notes" value={data.tis} onChange={()=>{actions.changeValue("tis",tis.value,data.id)}}></textarea>
                 </div>
             </div> 
             <div className="edit_item">   
               <div className="tit">校验</div>   
               <div className="write">     
                   <ul>     
                       <li className=""><label className="checkbox"><input type="checkbox" ref={el=>{required=el}} 
                       onChange={()=>{actions.changeValue("required",required.checked,data.id)}} checked={data.required}/>必须填</label></li>         
                       <li>
                           <label className="checkbox">
                           <input type="checkbox"  checked={Number(data.minValue)?true:false} />最少填
                           <input type="number" value={data.minValue}  ref={el=>{minValue=el}} onChange={()=>{actions.changeValue("minValue",minValue.value,data.id)}}/>个字符</label>
                       </li>     
                       <li>
                           <label className="checkbox"><input type="checkbox" checked={Number(data.maxValue)?true:false}/>最多填
                           <input type="number" value={data.maxValue} ref={el=>{maxValue=el}} onChange={()=>{actions.changeValue("maxValue",maxValue.value,data.id)}}/>个字符</label>
                        </li>    
                   </ul>   
               </div>
            </div>
        </div>
    }
}