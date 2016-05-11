import React,{Component} from "react"
import render from "react-dom"
import {updateTop} from "../containers/PreviewBox.js"
export const LiEmail=({onclick})=>{
    return( 
        <li onClick={()=>{onclick("EMAIL")}}>邮箱</li>
    )
}
  var field=['单行文字','多行文字','单项选择','多项选择','下拉框','数字','邮箱','电话','地理位置','时间','评分','微信扫码','子表单'];
export const PreviewEmail=({data,actions})=>{
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
export class EditEmail extends Component{
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
             <div className="title"><i className="fa fa-edit"></i>邮箱</div>
             <div className="edit_item">   
                 <div className="tit">标题</div>   
                 <div className="write"> 
                      <input type="text" className="sf-tit-value" ref={el=>{title=el}} name="tit_value" value={data.title} onChange={()=>{actions.changeValue("title",title.value,data.id)}} placeholder="未命名"/>
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
                   </ul>   
               </div>
            </div>
        </div>
    }
}