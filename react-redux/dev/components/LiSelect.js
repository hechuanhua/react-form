import React,{Component} from "react"
import render from "react-dom"
import {updateTop} from "../containers/PreviewBox.js"
export const LiSelect=({onclick})=>{
    return( 
        <li onClick={()=>{onclick("SELECT")}}>下拉框</li>
    )
}
const SelectPreviewLI=({data,index})=>{
    return <option  value={index}>{data.value?data.value:"选项"}</option>
}
const SelectFieldAppendLI=({data,actions,index,id})=>{
    let radio,input
    return <li className="flexCenter">
                  <input type="radio" name="radio" checked={data.checked} ref={el=>{radio=el}} onChange={()=>{actions.changeValue("choicesChecked",radio.checked,id,index)}} />
                  <label className="labeldiv">
                    <input type="text"  placeholder="选项" value={data.value} ref={el=>{input=el}} onChange={()=>{actions.changeValue("choicesInput",input.value,id,index)}}/>
                  </label>
                  <span className="cz"> 
                    <a className="fa fa-plus-square-o addBtn" onClick={()=>{actions.changeValue("addItem","",id,index)}}></a>
                    <a className="fa fa-minus-square-o delBtn"  onClick={()=>{actions.changeValue("delItem","",id,index)}}></a>
                  </span>
            </li>

}
export const PreviewSelect=({data,actions})=>{
    var radioItem=[];
    var active=-1;
    for(var i=0,len=data.choices.length;i<len;i++){
        radioItem.push(<SelectPreviewLI key={i} data={data.choices[i]} index={i}/>);
        if(data.choices[i]["checked"]){active=i}
    };
    return <div className={data.active?"previewItem active":"previewItem"} onClick={()=>{actions.clickPreviewLi(data.id)}}>
              <div className="title">{data.title}<span className="red ml5">{data.required?"*":""}</span></div>
              <div className="readOnly">
                    <select value={active} disabled>
                        <option value="-1" >请选择</option>
                        {radioItem}
                    </select>  
              </div>
              <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
              <div className="cz">
                   <i className="fa fa-plus-circle addBtn" title="复制" onClick={(e)=>{e.stopPropagation();actions.oncopy(data.id)}}></i>
                   <i className="fa fa-minus-circle delBtn" title="删除" onClick={(e)=>{e.stopPropagation();actions.ondelete(data.id)}}></i>
              </div>
           </div>
}
export class EditSelect extends Component{
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        updateTop()
    }
    componentDidUpdate(){
        updateTop()
    }
    batchEditing(data){
      var datas="";
      if(data.length){
          data.map(el=>{
              if(el.value){
                datas+=el.value+'\n'
              }
          }
          )
      }
      console.log(this.props)
      this.props.modalBoxIsNone()
      this.props.actions.batchEdit(datas)
    }
    render(){
    let data=this.props.data;
    let actions=this.props.actions;
    let choices=this.props.choices;
    let title,defaultinput,tis,minValue,maxValue,required,readonly
    var radioItem=[];
    for(var i=0,len=data.choices.length;i<len;i++){
        radioItem.push(<SelectFieldAppendLI key={i} data={data.choices[i]} id={data.id} actions={actions} index={i} />);
    }
    return <div className="fieldEdit radioFieldEdit"  onClick={()=>{actions.clickPreviewLi(data.id)}}>
             <div className="title"><i className="fa fa-edit"></i>下拉框</div>
             <div className="edit_item">   
                 <div className="tit">标题</div>   
                 <div className="write"> 
                      <input type="text" className="sf-tit-value" ref={el=>{title=el}} name="tit_value" value={data.title} onChange={()=>{actions.changeValue("title",title.value,data.id)}} placeholder="未命名"/>
                 </div>
             </div>
             <div className="edit_item">  
                 <div className="tit">选项</div> 
                 <ul className="write appendLi">
                        {radioItem}
                      <div className="tr tianjiaDiv mt5">
                       
                        <a className="add_multiple_choices" href="javascript:;" onClick={()=>{this.batchEditing(data.choices)}}> 批量编辑</a>
                      </div>
                  </ul>
             </div>
             <div className="edit_item">  
                  <div className="tit">布局方式</div>  
                  <div className="write mt5">  
                      <select className="input-small" value={data.line_row} onChange={()=>{}}>     
                          <option value="1" >一行一列</option>     
                          <option value="2">一行两列</option>     
                          <option value="3">一行三列</option>   
                      </select>
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