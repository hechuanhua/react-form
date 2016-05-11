import React,{Component} from "react"
import {render} from "react-dom"

class ModalBox extends Component{
    constructor(props){
        super(props)
    } 
    render(){
        var textarea
        var text="";
        if(this.props.isNone){
            var newdata=this.props.data.filter(el=>
                el.active
            )
            if(newdata.length){
                newdata[0].choices.map(el=>{
                    if(el.value){
                      text+=el.value+'\n'
                    }
                }
                )
             }
        }
        return (            
            <div className="modalBox" style={{display:this.props.isNone?"block":"none"}}>
                <div className="modalBg"></div>
                <div className="modal">
                    <div className="modal-header"><i className="fa fa-times close"></i><h3>批量编辑</h3></div>
                    <div className="modal-body">
                      <p>每个选项请单列一行</p>
                      <textarea rows="10" ref={el=>textarea=el} value={text} onChange={(e)=>{this.props.actions.submitDate(textarea.value)}}></textarea>
                    </div>
                    <div className="modal-footer tc"> 
                        <a className="btn orangeBtn" onClick={()=>{this.props.actions.batchEdit()}}>提交</a>
                        <a className="btn qxBtn" onClick={()=>{this.props.actions.batchEdit()}}>取消</a>
                    </div>
                </div>
            </div>   
        )
    }
}
export default ModalBox