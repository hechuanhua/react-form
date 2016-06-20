import React,{Component} from "react"
import {render} from "react-dom"

class ModalBox extends Component{
    constructor(props){
        super(props)
        this.textarea;
    } 
    /*componentWillMount(){
        console.log("componentWillMount",this.props.ModalBoxData)
    }
    componentDillMount(){
        console.log("componentDillMount",this.props.ModalBoxData)
    }
    componentWillUpdate(){
        console.log("componentWillUpdate",this.props.ModalBoxData)
    }
    componentWillReceiveProps(){
         console.log("componentWillReceiveProps",this.props)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }*/
    submitDate(){
        console.log(this.textarea.value)
        this.props.actions.submitDate(this.textarea.value)
        this.props.modalBoxIsNone()

    }
    render(){
        //console.log("render",this.textarea)
        return (        
            <div className="modalBox" style={{display:"none"}}>
                <div className="modalBg"></div>
                <div className="modal">
                    <div className="modal-header"><i className="fa fa-times close"></i><h3>批量编辑</h3></div>
                    <div className="modal-body">
                      <p>每个选项请单列一行</p>
                      <textarea rows="10" ref={el=>this.textarea=el} value={this.props.ModalBoxData} onChange={(e)=>{this.props.actions.batchEdit(e.target.value)}}></textarea>
                    </div>
                    <div className="modal-footer tc"> 
                        <a className="btn orangeBtn" onClick={()=>{this.submitDate()}}>提交</a>
                        <a className="btn qxBtn" onClick={()=>{this.props.modalBoxIsNone()}}>取消</a>
                    </div>
                </div>
            </div>   
        )
    }
}
export default ModalBox