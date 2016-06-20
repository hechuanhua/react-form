import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from "../action/index.js"
import EditBox from "./EditBox.js"
import ModalBox from "./ModalBox.js"
import PreviewBox from "./PreviewBox.js"
import FieldList from "./FieldList.js"

const clickAddFoeld=()=>{
    document.querySelector('.fieldList').style.cssText="display:flex"
    document.querySelector('.addField').style.cssText="display:none";
}
const clickFieldList=()=>{
    document.querySelector('.fieldList').style.cssText="display:none"
    document.querySelector('.addField').style.cssText="display:block";
}
var isNone;
const modalBoxIsNone=(dispatch)=>{
    isNone=!isNone
    document.querySelector('.modalBox').style.display=isNone?"block":"none"
}
const App=({data,actions,ModalBoxIsNone,ModalBoxData})=>{ 
    return(
        <div id="addField" className="sfFormBox">
            <ModalBox data={data} actions={actions} modalBoxIsNone={modalBoxIsNone} ModalBoxData={ModalBoxData} />
            <div className="sfFormMain">
                <PreviewBox data={data} actions={actions}/>
                <div className="addField" onClick={clickAddFoeld}> +添加新字段</div>
                <FieldList onclick={actions.clickLi} clickFieldList={clickFieldList}/>
            </div>
            <div className="sfForm_editBox">
                <EditBox data={data} actions={actions} modalBoxIsNone={modalBoxIsNone}/>
            </div>  
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {data:state.data,ModalBoxIsNone:state.ModalBoxIsNone,ModalBoxData:state.ModalBoxData}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(
    mapStateToProps,//只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并,如果你省略了这个参数，你的组件将不会监听 Redux store。如果指定了该回调函数中的第二个参数 ownProps，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用
    mapDispatchToProps//如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，而且这个对象会与 Redux store 绑定在一起，其中所定义的方法名将作为属性名，合并到组件的 props 中。如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux 的辅助函数 bindActionCreators()）。如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。如果指定了该回调函数中第二个参数 ownProps，该参数的值为传递到组件的 props，而且只要组件接收到新 props，mapDispatchToProps 也会被调用。
    )(App)
