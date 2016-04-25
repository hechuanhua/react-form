/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-02 12:32:40
 * @version $Id$
 */  
    var field=['单行文字','多行文字','单项选择','多项选择','下拉框','数字','邮箱','电话','地理位置','时间','评分','微信扫码','子表单'];
    var textJson={"type":"text","title":"单行文字","default":"单行文字默认值","tis":"单行文字提示","required":false,"readonly":true,"minValue":"","maxValue":""};
    var textareaJson={"type":"textarea","title":"多行文字","default":"多行文字默认值","tis":"多行文字提示","required":false,"readonly":false,"minValue":"","maxValue":""};
    var radioJson={"type":"radio","title":"单项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"};
    var checkboxJson={"type":"checkbox","title":"多项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"};
    var selectJson={"type":"select","title":"下拉框","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"};
    var _AddField,_AddFieldBtn,_FieldList,_TextPreview,_TextareaPreview,_RadioPreview,_CheckboxPreview,_SelectPreview,_TextPreview,_EditFieldBox,_batchEditBox,key=0,
    _RadioField,_CheckboxField,_SelectField,active;
    var text={ 
              "_id": "foa1143ed59172463d8accd3876ed76dc1",
              "_type": "Fields::TextField",//类型
              "choices": [],//单项多项选择
              "label": "单行文字",//标题
              "line_row": 1,//一行一列
              "maximum_length": 0,//最大长度
              "minimum_grids_to_occupy": "",
              "minimum_length": 0,//最小长度
              "notes": "单行文字单行文字单行文字",//提示
              "position": 1,//顺序
              "predefined_value": "单行文字单行文字",//默认文字
              "validations": ['presence','uniqueness']//必填 只读
            };
var AddField=React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState:function(){
            console.log("getInitialState");
            _AddField=this;
            return {previewList:[],editIteming:[],databox:[]}//展示列表，编辑项目，json
        },
        componentWillMount:function(){
          console.log("componentWillMount")
        },
        componentDidMount:function(){
          console.log("componentDidMount")
        },
        
        componentWillUpdate:function(){
          console.log("componentWillUpdate")
        },
        componentDidUpdate:function(){
          console.log("componentDidUpdate")
        },
        componentWillUnmount:function(){
          console.log("componentWillUnmount")
        },
        // // componentWillReceiveProps :function(){
        //   console.log("componentWillReceiveProps")
        // },
        // shouldComponentUpdate:function(){
        //   console.log("shouldComponentUpdate")
        // },
        // updateState:function(data){
        //   console.log(data)
        //   this.setState(data);
        // },
        lihandleClick:function(e){//初始化数据
          //this.state.isHidden=! this.state.isHidden;
            switch($(e.target).attr('data-type')){
                case '单行文字':
                    this.state.databox.push(textJson);
                    _EditFieldBox.setState({editDiv:<TextField data-type={'单行文字'}/>});
                    //this.state.previewList.push(<TextPreview data-type={'单行文字'} dataJson={textJson}/>);
                    //this.state.editIteming=[<TextField  data-type={'单行文字'} dataJson={textJson}/>];
                break;
                case '多行文字':
                    this.state.databox.push(textareaJson);
                    _EditFieldBox.setState({editDiv:<TextareaField data-type={'多行文字'}/>});
                    //this.state.previewList.push(<TextareaPreview data-type={'多行文字'} dataJson={textareaJson}/>);
                    //this.state.editIteming=[<TextareaField data-type={'多行文字'} dataJson={textareaJson}/>];
                break;
                case '单项选择':
                    this.state.databox.push(radioJson);
                    _EditFieldBox.setState({editDiv:<RadioField data-type={'单项选择'}/>});
                    //this.state.previewList.push(<RadioPreview data-type={'单项选择'} dataJson={radioJson}/>);
                    //this.state.editIteming=[<RadioField data-type={'单项选择'}/>];
                break;
                case '多项选择':
                    this.state.databox.push(checkboxJson);
                    _EditFieldBox.setState({editDiv:<CheckboxField data-type={'多项选择'}/>});
                    //this.state.previewList.push(<CheckboxPreview data-type={'多项选择'} dataJson={checkboxJson}/>);
                    //this.state.editIteming=[<CheckboxField data-type={'多项选择'}/>];
                break;
                case '下拉框':
                    this.state.databox.push(selectJson);
                    _EditFieldBox.setState({editDiv:<SelectField data-type={'下拉框'}/>});
                    //this.state.previewList.push(<SelectPreview data-type={'下拉框'} dataJson={selectJson}/>);
                    //this.state.editIteming=[<SelectField data-type={'下拉框'} dataJson={selectJson}/>];
                break;
                case '两级下拉框':
                    this.state.databox.push(textareaJson);
                    _EditFieldBox.setState({editDiv:<TextField data-type={'两级下拉框'}/>});
                    //this.state.previewList.push(<TextPreview data-type={'两级下拉框'} dataJson={textareaJson}/>);
                    //this.state.editIteming=[<RadioField data-type={'两级下拉框'} dataJson={textareaJson}/>];
                break;
            }
            _AddFieldBtn.show();
            this.replaceState(this.state);
        },
        previewItemHhandleClick:function(data){
            this.setState({
                editIteming:[data]
            });
        },
        render:function(){
            return <div id="addField" className="sfFormBox" >
                <BatchEditBox/>
                <div className="sfFormMain">
                <div className="previewBox">
                  {this.state.databox.map(function(item,i){
                        switch(item["type"]){
                            case "text":return React.cloneElement(<TextPreview />,{key:key.toString()+i,index:i,"data-type":'单行文字',dataJson:{textJson}});break;
                            case "textarea":return React.cloneElement(<TextareaPreview />,{key:key.toString()+i,index:i,"data-type":'多行文字',dataJson:{textareaJson}});break;
                            case "radio":return React.cloneElement(<RadioPreview />,{key:key.toString()+i,index:i,"data-type":'单项选择',dataJson:{radioJson}});break;
                            case "checkbox":return React.cloneElement(<CheckboxPreview />,{key:key.toString()+i,index:i,"data-type":'多项选择',dataJson:{checkboxJson}});break;
                            case "select":return React.cloneElement(<SelectPreview />,{key:key.toString()+i,index:i,"data-type":'下拉框',dataJson:{selectJson}});break;
                            case "select":return React.cloneElement(<TextPreview />,{key:key.toString()+i,index:i});break;
                            case "select":return React.cloneElement(<TextPreview />,{key:key.toString()+i,index:i});break;
                            case "select":return React.cloneElement(<TextPreview />,{key:key.toString()+i,index:i});break;
                        }
                          
                       }.bind(this))}
                </div> 
                <AddFieldBtn/>
                <FieldList />
                </div> 
                <EditFieldBox/>
                  {
                    // this.state.editIteming.map(function(item,i){
                    //       return React.cloneElement(item,{
                    //          key:Math.random(),
                    //       })
                    //    }.bind(this))
                }

            </div> 
        }
    });
var AddFieldBtn=React.createClass({
    getInitialState:function(){
        _AddFieldBtn=this;
        return {"isHidden":false}
    },
    show:function(){
            this.setState({ 
              isHidden:!this.state.isHidden
            })
            _FieldList.forceUpdate();
    },
    render:function(){
        return <div className="addField" onClick={this.show} style={{"display":this.state.isHidden?"none":"block"}}> +添加新字段</div>
    }
});
var EditFieldBox=React.createClass({
    getInitialState:function(){
        _EditFieldBox=this;
        return {editDiv:<div></div>}
    },
    render:function(){
        return <div className="sfForm_editBox">
        {React.cloneElement(this.state.editDiv,{key:Math.random()})}
        </div>
    }
});
var FieldList=React.createClass({//LI字段列表
    getInitialState:function(){
        _FieldList=this;
        return null
    },
    render:function(){
        var fieldlist=[];
        field.forEach(function(title,i){
             return fieldlist.push(
                <li key={i} onClick={_AddField.lihandleClick} data-type={title}>{title}</li>
                )
        });
        return  <ul className="fieldList"  style={{"display":_AddFieldBtn.state.isHidden?"flex":"none"}} >
                {fieldlist}
                </ul>      
    }
    });
var Previewmixin={
    updateTop: function() {
          var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
          var top=$currentDiv.offset().top+$currentDiv.height()/2-49;
          if($currentDiv.index()==0){top=0}
          $('.sfForm_editBox').css("top",top);
    },
    handleClick:function(type,e){
          $(ReactDOM.findDOMNode(this.refs.formItem)).addClass('active').siblings('.previewItem').removeClass('active');
          this.updateTop();
          switch(this.props['data-type']){
            case "单行文字":_TextPreview=this;_EditFieldBox.setState({editDiv:<TextField data-type={'单行文字'} dataJson={_AddField.state.databox[this.props.index]}/>});
                //_AddField.previewItemHhandleClick(<TextField dataJson={_AddField.state.databox[this.props.index]} data-type={'单行文字'}/>);
                break;
            case "多行文字":_TextareaPreview=this;
                _EditFieldBox.setState({editDiv:<TextareaField data-type={'多行文字'} dataJson={_AddField.state.databox[this.props.index]}/>});
                //_AddField.previewItemHhandleClick(<TextareaField dataJson={_AddField.state.databox[this.props.index]} data-type={'多行文字'}/>);
                break;
            case "单项选择":_RadioPreview=this;
                _EditFieldBox.setState({editDiv:<RadioField data-type={'单项选择'} dataJson={_AddField.state.databox[this.props.index]}/>});
                //_AddField.previewItemHhandleClick(<RadioField dataJson={_AddField.state.databox[this.props.index]} data-type={'单项选择'}/>);
                break;
            case "多项选择":_CheckboxPreview=this;
                _EditFieldBox.setState({editDiv:<CheckboxField data-type={'多项选择'} dataJson={_AddField.state.databox[this.props.index]}/>});
                //_AddField.previewItemHhandleClick(<CheckboxField dataJson={_AddField.state.databox[this.props.index]} data-type={'多项选择'}/>);
                break;
            case "下拉框":_SelectPreview=this;
                _EditFieldBox.setState({editDiv:<SelectField data-type={'下拉框'} dataJson={_AddField.state.databox[this.props.index]}/>});
                //_AddField.previewItemHhandleClick(<SelectField dataJson={_AddField.state.databox[this.props.index]} data-type={'下拉框'}/>);
                break;
          }  
    },
    copyItem:function(e){
        e.stopPropagation();
        key++;
        _AddField.state.databox.splice(this.props.index+1,0,this.state)
        _AddField.setState({});
        active=this.props.index+1;
    },
    delItem:function(e){
        e.stopPropagation();
        key--;
        _AddField.state.databox.splice(this.props.index,1)
        _AddField.setState({});
        active=this.props.index-1;
        active=active<0?0:active;
        if(_AddField.state.databox.length==0){
            _EditFieldBox.setState({editDiv:<div></div>})
        }
            
    },
    updateState:function(data){
          this.setState(data);
    },
    getInitialState:function(){
         // if(this.props.index+1==_AddField.state.databox.length){
            switch(this.props['data-type']){
                case '单行文字':_TextPreview=this;     
                     return {"type":"text","title":"单行文字","default":"单行文字默认值","tis":"单行文字提示","required":false,"readonly":true,"minValue":"","maxValue":""};
                     break;
                case '多行文字':_TextareaPreview=this; 
                     return {"type":"textarea","title":"多行文字","default":"多行文字默认值","tis":"多行文字提示","required":false,"readonly":false,"minValue":"","maxValue":""};
                     break;
                case '单项选择':_RadioPreview=this;     
                     return {"type":"radio","title":"单项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"};
                     break;
                case '多项选择':_CheckboxPreview=this;  
                     return {"type":"checkbox","title":"多项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"}
                     break;
                case '下拉框':_SelectPreview=this;     
                     return {"type":"select","title":"下拉框","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"}
                     break;
                case '数字':_TextPreview=this;          return textJson;break;
                case '邮箱':_TextPreview=this;          return textJson;break;
                case '电话':_TextPreview=this;          return textJson;break;
                case '地理位置':_TextPreview=this;      return textJson;break;
                case '时间':_TextPreview=this;          return textJson;break;
                case '评分':_TextPreview=this;          return textJson;break;
                case '微信扫码':_TextPreview=this;      return textJson;break;
                case '子表单':_TextPreview=this;        return textJson;break;
            }
          
         // }
    },
    componentWillMount:function(){
          console.log("TextPreview=>componentWillMount"+this.props.index);
          var oldData=_AddField.state.databox[this.props.index];
          if(oldData){
              this.setState(oldData)
          }
    },
    componentDidMount:function(){
          console.log("TextPreview=>componentDidMount"+this.props.index);
          if(active!=null||active!=undefined){
            if(this.props.index==active){
                 ReactDOM.findDOMNode(this.refs.formItem).click();
                 return
            }
          }else{
              var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
              $currentDiv.addClass('active').siblings('.previewItem').removeClass('active');
              this.updateTop();
          }    
    },
    componentWillUpdate:function(){
          console.log("TextPreview=>componentWillUpdate"+this.props.index)
    },
    componentDidUpdate:function(){
          console.log("TextPreview=>componentDidUpdate"+this.props.index)
           _AddField.state.databox[this.props.index]=this.state;
           active=null;
    },
}
var TextPreview=React.createClass({//Text字段展示
        mixins: [Previewmixin],
        componentWillUpdate:function(){
          console.log("TextPreview=>componentWillUpdate")
        },
        render:function(){
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
                      <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                      <div className="readOnly"><input type="text" disabled="disabled" value={this.state.default} placeholder={this.state.tis}/></div>
                      <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
                      <div className="cz">
                           <i className="fa fa-plus-circle addBtn" title="复制" onClick={this.copyItem}></i>
                           <i className="fa fa-minus-circle delBtn" title="删除" onClick={this.delItem}></i>
                      </div>
                   </div>
          }
    });
var TextareaPreview=React.createClass({//Textarea字段展示
        mixins: [Previewmixin],
        render:function(){
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
                      <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                      <div className="readOnly"><textarea disabled="disabled" value={this.state.default} placeholder={this.state.tis}/></div>
                      <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
                      <div className="cz">
                           <i className="fa fa-plus-circle addBtn" title="复制" onClick={this.copyItem}></i>
                           <i className="fa fa-minus-circle delBtn" title="删除" onClick={this.delItem}></i>
                      </div>
                   </div>
          }
    });
var RadioPreviewLI=React.createClass({
    render:function(){
        return <label className="radio"><input type="radio" disabled="disabled" checked={this.props.data.checked}/>{this.props.data.value?this.props.data.value:"选项"}</label>
    }
});
var RadioPreview=React.createClass({//Radio字段展示 
        mixins: [Previewmixin],
        render:function(){
            var radioItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                radioItem.push(<RadioPreviewLI key={i} data={this.state.choices[i]}/>);
            };
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
                    <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                    <div className="readOnly">
                        {radioItem}
                    </div>
                    <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
                    <div className="cz">
                       <i className="fa fa-plus-circle addBtn" title="复制" onClick={this.copyItem}></i>
                       <i className="fa fa-minus-circle delBtn" title="删除" onClick={this.delItem}></i>
                    </div>
                </div>
          } 
    });
var CheckboxPreviewLI=React.createClass({
    render:function(){
        return <label className="radio"><input type="checkbox" disabled="disabled" checked={this.props.data.checked}/>{this.props.data.value?this.props.data.value:"选项"}</label>
               
    }
});
var CheckboxPreview=React.createClass({//Checkbox字段展示 
        mixins: [Previewmixin],
        render:function(){
            var radioItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                radioItem.push(<CheckboxPreviewLI key={i} data={this.state.choices[i]}/>);
            };
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
                    <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                    <div className="readOnly">
                        {radioItem}
                    </div>
                    <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
                    <div className="cz">
                       <i className="fa fa-plus-circle addBtn" title="复制" onClick={this.copyItem}></i>
                       <i className="fa fa-minus-circle delBtn" title="删除" onClick={this.delItem}></i>
                    </div>
                </div>
          } 
    });
var SelectPreviewLI=React.createClass({
    render:function(){
        return  <label className="radio"><input type="radio" disabled="disabled" checked={this.props.data.checked}/>{this.props.data.value?this.props.data.value:"选项"}</label>
               
    }
});
var SelectPreview=React.createClass({//Checkbox字段展示 
        mixins: [Previewmixin],
        render:function(){
            var radioItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                radioItem.push(<SelectPreviewLI key={i} data={this.state.choices[i]}/>);
            };
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
                    <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                    <div className="readOnly">
                        {radioItem}
                    </div>
                    <div className="sort-handlerBox"><i className="icon sort-handler"></i> </div> 
                    <div className="cz">
                       <i className="fa fa-plus-circle addBtn" title="复制" onClick={this.copyItem}></i>
                       <i className="fa fa-minus-circle delBtn" title="删除" onClick={this.delItem}></i>
                    </div>
                </div>
          } 
    });
var Editmixin={
    getInitialState:function(){ 
        console.log("TextField=>getInitialState");
        switch(this.props['data-type']){
                case '单行文字':   
                     return {"type":"text","title":"单行文字","default":"单行文字默认值","tis":"单行文字提示","required":false,"readonly":true,"minValue":"","maxValue":""}
                     break;
                case '多行文字':
                     return {"type":"textarea","title":"多行文字","default":"多行文字默认值","tis":"多行文字提示","required":false,"readonly":false,"minValue":"","maxValue":""};
                     break;
                case '单项选择':  _RadioField=this;
                     return {"type":"radio","title":"单项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"};
                     break;
                case '多项选择':_CheckboxField=this;
                     return {"type":"checkbox","title":"多项选择","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"}
                     break;
                case '下拉框':   _SelectField=this; 
                     return {"type":"select","title":"下拉框","choices":[{"checked":false,"value":""},{"checked":true,"value":""},{"checked":false,"value":""}],"required":false,"minValue":"","maxValue":"","line_row":"1"}
                     break;
                case '数字':_TextPreview=this;          return textJson;break;
                case '邮箱':_TextPreview=this;          return textJson;break;
                case '电话':_TextPreview=this;          return textJson;break;
                case '地理位置':_TextPreview=this;      return textJson;break;
                case '时间':_TextPreview=this;          return textJson;break;
                case '评分':_TextPreview=this;          return textJson;break;
                case '微信扫码':_TextPreview=this;      return textJson;break;
                case '子表单':_TextPreview=this;        return textJson;break;
            }
    },
    componentWillMount:function(){
          console.log("TextField=>componentWillMount=>");
          if(this.props.dataJson){
            this.setState(this.props.dataJson);
          }else{
            this.setState(this.state);
          }
    },
    componentDidUpdate:function(){
          console.log("TextField=>componentDidUpdate")
          switch(this.props['data-type']){//同步绑定
                case '单行文字':_TextPreview.updateState(this.state);break;
                case '多行文字':_TextareaPreview.updateState(this.state);break;
                case '单项选择':_RadioPreview.updateState(this.state);break;
                case '多项选择':_CheckboxPreview.updateState(this.state);break;
                case '下拉框':_SelectPreview.updateState(this.state);break;
                case '数字':_TextPreview.updateState(this.state);break;
                case '邮箱':_TextPreview.updateState(this.state);break;
                case '电话':_TextPreview.updateState(this.state);break;
                case '地理位置':_TextPreview.updateState(this.state);break;
                case '时间':_TextPreview.updateState(this.state);break;
                case '评分':_TextPreview.updateState(this.state);break;
                case '微信扫码':_TextPreview.updateState(this.state);break;
                case '子表单':_TextPreview.updateState(this.state);break;
          }
    },
};
var TextField=React.createClass({//编辑单行文字字段
        mixins: [ React.addons.LinkedStateMixin,Editmixin ],
        render:function(){
            return <div className="fieldEdit textFieldEdit">
                         <div className="title"><i className="fa fa-edit"></i>单行文字</div>
                         <div className="edit_item">   
                             <div className="tit">标题</div>   
                             <div className="write"> 
                                  <input type="text" className="sf-tit-value" name="tit_value" valueLink={this.linkState('title')} placeholder="未命名"/>
                             </div>
                         </div>
                         <div className="edit_item">   
                             <div className="tit">默认值</div>   
                             <div className="write"> 
                             <input type="text" className="sf-default-value" name="default_value" valueLink={this.linkState('default')} />
                             </div>
                         </div>
                         <div className="edit_item">   
                             <div className="tit">提示</div>    
                             <div className="write"> 
                             <textarea id="" cols="30" rows="5" className="sf-tis-value" name="notes" valueLink={this.linkState('tis')}></textarea>
                             </div>
                         </div> 
                         <div className="edit_item">   
                           <div className="tit">校验</div>   
                           <div className="write">     
                               <ul>     
                                   <li className=""><label className="checkbox" ><input type="checkbox" checkedLink={this.linkState('required')}/>必须填</label></li>     
                                   <li className=""><label className="checkbox"><input type="checkbox" checkedLink={this.linkState('readonly')}/>只读项</label></li>     
                                   <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.minValue)?true:false}/>最少填<input type="number" valueLink={this.linkState('minValue')}/>个字符</label></li>     
                                   <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.maxValue)?true:false}/>最多填<input type="number" valueLink={this.linkState('maxValue')}/>个字符</label></li>    
                               </ul>   
                           </div>
                        </div>
                    </div>    
        }
    });
/*多行文字*/
var TextareaField=React.createClass({
        mixins: [ React.addons.LinkedStateMixin,Editmixin ],
        render:function(){
            return <div className="fieldEdit TextareaField">
                         <div className="title"><i className="fa fa-edit"></i>多行文字</div>
                         <div className="edit_item">   
                             <div className="tit">标题</div>   
                             <div className="write"> 
                                  <input type="text" className="sf-tit-value" name="tit_value" valueLink={this.linkState('title')} placeholder="未命名"/>
                             </div>
                         </div>
                         <div className="edit_item">   
                             <div className="tit">默认值</div>   
                             <div className="write"> 
                             <input type="text" className="sf-default-value" name="default_value" valueLink={this.linkState('default')} />
                             </div>
                         </div>
                         <div className="edit_item">   
                             <div className="tit">提示</div>   
                             <div className="write"> 
                             <textarea id="" cols="30" rows="5" className="sf-tis-value" name="notes" valueLink={this.linkState('tis')}></textarea>
                             </div>
                         </div> 
                         <div className="edit_item">   
                           <div className="tit">校验</div>   
                           <div className="write">     
                               <ul>     
                                   <li className=""><label className="checkbox" ><input type="checkbox" checkedLink={this.linkState('required')}/>必须填</label></li>         
                                   <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.minValue)?true:false}/>最少填<input type="number" valueLink={this.linkState('minValue')}/>个字符</label></li>     
                                   <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.maxValue)?true:false}/>最多填<input type="number" valueLink={this.linkState('maxValue')}/>个字符</label></li>    
                               </ul>   
                           </div>
                          </div>
                    </div>
        }
    });
/*单项 多项 下拉*/
var Choicesmixin={
    checkedChange:function(e){
            var index=$(e.target).parent('li').index();
            if(this.props['data-type']=='多项选择'){
                this.state.choices[index].checked=!this.state.choices[index].checked
            }else{
                for(var i=0,choices=this.state.choices;i<choices.length;i++){
                    if(index==i){
                        choices[i].checked=!choices[i].checked
                    }else{
                        choices[i].checked=false;
                    }
                };
            }
            this.setState({});
    },
    inputValue:function(e){
            var index=$(e.target).parents('li').index();
            this.state.choices[index].value=e.target.value;
            // this.setState({...this.state});
            this.forceUpdate();
    },
    addItem:function(e){
            var index=$(e.target).parents('li').index();
            var itemJson={"checked":false,"value":""};
            this.state.choices.splice(index+1,0,itemJson);
            this.setState({});
    },
    delItem:function(e){
            var index=$(e.target).parents('li').index();
            this.state.choices.splice(index,1);
            this.setState({});
    },
    batchEdit:function(editItem,e){
            _batchEditBox.setState({
                isHidden:!_batchEditBox.state.isHidden
            })
             if(arguments.length>=4&&_batchEditBox.isMounted()){
                _batchEditBox.state.value='';
                for(var i=0,choices=editItem.state.choices;i<choices.length;i++){
                    if(choices[i].value){
                         _batchEditBox.state.value+=(choices[i].value+'\n')
                    }
                }
            }
    },
    submitDate:function(){
            var arr=this.refs.textarea.value.split(/\n/);
            var trimValue=[];
            for(var i=0,len=arr.length;i<len;i++){
                if(arr[i]!=0) trimValue[trimValue.length]=arr[i];
            };
            var editItem;
            if(_EditFieldBox.state.editDiv.props["data-type"]=="单项选择"){
                editItem=_RadioField;
            }
            if(_EditFieldBox.state.editDiv.props["data-type"]=="多项选择"){
                editItem=_CheckboxField;
            }
            if(_EditFieldBox.state.editDiv.props["data-type"]=="下拉框"){
                editItem=_SelectField;
            }
            var choices=editItem.state.choices;
            choices.length=trimValue.length;
            for(var i=0;i<choices.length;i++){
                if(!choices[i]){
                    choices[i]={"checked":false,"value":""}
                }
               choices[i].value=trimValue[i]
            };
            editItem.forceUpdate();
            this.batchEdit();
            
    },
    textareaChange:function(e){
             this.setState({
                value:e.target.value
             }) 
    }
};
var BatchEditBox=React.createClass({//批量编辑
    mixins: [ Choicesmixin ],
    getInitialState:function(){
        _batchEditBox=this;
        return {"isHidden":true,"value":""}
    },
    componentWillMount:function(){
        console.log("BatchEditBox=>componentWillMount")
    },
    componentDidMount:function(){
        console.log("BatchEditBox=>componentDidMount")
    },
    componentDidUpdate:function(){
        console.log("BatchEditBox=>componentDidUpdate")
    },
    componentWillUpdate:function(){
        console.log("BatchEditBox=>componentWillUpdate")
    },
    render:function(){
        return <div className="modalBox" style={{display:this.state.isHidden?"none":"block"}}>
                    <div className="modalBg"></div>
                    <div className="modal">
                        <div className="modal-header"><i className="fa fa-times close" onClick={this.batchEdit}></i><h3>批量编辑</h3></div>
                        <div className="modal-body">
                          <p>每个选项请单列一行</p>
                          <textarea rows="10" value={this.state.value} onChange={this.textareaChange} ref="textarea"></textarea>
                        </div>
                        <div className="modal-footer tc"> 
                            <a className="btn orangeBtn" onClick={this.submitDate}>提交</a>
                            <a className="btn qxBtn" onClick={this.batchEdit}>取消</a>
                        </div>
                    </div>
                </div>
    }
});
var RadioFieldAppendLI=React.createClass({
    render:function(){
        return <li className="flexCenter">
                      <input type="radio" name="radio" checked={this.props.data.checked} onChange={this.props.checkedChange} />
                      <label className="labeldiv">
                        <input type="text"  placeholder="选项" value={this.props.data.value} onChange={this.props.inputValue}/>
                      </label>
                      <span className="cz"> 
                        <a className="fa fa-plus-square-o addBtn" onClick={this.props.addItem}></a>
                        <a className="fa fa-minus-square-o delBtn"  onClick={this.props.delItem}></a>
                      </span>
                </li>
    }
})
var RadioField=React.createClass({
        mixins: [ React.addons.LinkedStateMixin,Editmixin,Choicesmixin ],
        render:function(){
            var radioItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                radioItem.push(<RadioFieldAppendLI key={i} data={this.state.choices[i]} checkedChange={this.checkedChange} inputValue={this.inputValue} addItem={this.addItem} delItem={this.delItem} />);
            }
          return  <div className="fieldEdit TextareaField">
                     <div className="title"><i className="fa fa-edit"></i>单项选择</div>
                     <div className="edit_item">   
                         <div className="tit">标题</div>   
                         <div className="write"> 
                              <input type="text" className="sf-tit-value" name="tit_value" valueLink={this.linkState('title')} placeholder="未命名"/>
                         </div>
                     </div>
                     <div className="edit_item">  
                         <div className="tit">选项</div> 
                         <ul className="write appendLi">
                                {radioItem}
                              <div className="tr tianjiaDiv mt5">
                                <a className="tianjia add_radio pr5" href="javascript:;">添加选项</a>| 
                                <a className="add_multiple_choices" href="javascript:;" onClick={this.batchEdit.bind(null,this)}> 批量编辑</a>
                              </div>
                          </ul>
                     </div>
                     <div className="edit_item">  
                          <div className="tit">布局方式</div>  
                          <div className="write mt5">  
                              <select className="input-small" valueLink={this.linkState('line_row')}>     
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
                               <li className=""><label className="checkbox" ><input type="checkbox" checkedLink={this.linkState('required')}/>必须填</label></li>          
                           </ul>   
                       </div>
                      </div>
                  </div>
              }
    });
var CheckboxFieldAppendLI=React.createClass({
    render:function(){
        return <li className="flexCenter">
                      <input type="checkbox" checked={this.props.data.checked} onChange={this.props.checkedChange} />
                      <label className="labeldiv">
                        <input type="text"  placeholder="选项" value={this.props.data.value} onChange={this.props.inputValue}/>
                      </label>
                      <span className="cz"> 
                        <a className="fa fa-plus-square-o addBtn" onClick={this.props.addItem}></a>
                        <a className="fa fa-minus-square-o delBtn"  onClick={this.props.delItem}></a>
                      </span>
                </li>
    }
});
var CheckboxField=React.createClass({
        mixins: [ React.addons.LinkedStateMixin,Editmixin,Choicesmixin ],
        render:function(){
            var checkboxItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                checkboxItem.push(<CheckboxFieldAppendLI key={i} data={this.state.choices[i]} checkedChange={this.checkedChange} inputValue={this.inputValue} addItem={this.addItem} delItem={this.delItem} />);
            }
          return  <div className="fieldEdit TextareaField">
                     <div className="title"><i className="fa fa-edit"></i>多项选择</div>
                     <div className="edit_item">   
                         <div className="tit">标题</div>   
                         <div className="write"> 
                              <input type="text" className="sf-tit-value" name="tit_value" valueLink={this.linkState('title')} placeholder="未命名"/>
                         </div>
                     </div>
                     <div className="edit_item">  
                         <div className="tit">选项</div> 
                         <ul className="write appendLi">
                                {checkboxItem}
                              <div className="tr tianjiaDiv mt5">
                                <a className="tianjia add_radio pr5" href="javascript:;">添加选项</a>| 
                                <a className="add_multiple_choices" href="javascript:;"  onClick={this.batchEdit}> 批量编辑</a>
                              </div>
                          </ul>
                     </div>
                     <div className="edit_item">  
                          <div className="tit">布局方式</div>  
                          <div className="write mt5">  
                              <select className="input-small" valueLink={this.linkState('line_row')}>     
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
                               <li className=""><label className="checkbox" ><input type="checkbox" checkedLink={this.linkState('required')}/>必须填</label></li>         
                               <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.minValue)?true:false}/>最少填<input type="number" valueLink={this.linkState('minValue')}/>个字符</label></li>     
                               <li><label className="checkbox"><input type="checkbox" checked={Number(this.state.maxValue)?true:false}/>最多填<input type="number" valueLink={this.linkState('maxValue')}/>个字符</label></li>    
                           </ul>   
                       </div>
                      </div>
                  </div>
              }
    });
var SelectFieldAppendLI=React.createClass({
    render:function(){
        return <li className="flexCenter">
                      <input type="radio" checked={this.props.data.checked} onChange={this.props.checkedChange} />
                      <label className="labeldiv">
                        <input type="text"  placeholder="选项" value={this.props.data.value} onChange={this.props.inputValue}/>
                      </label>
                      <span className="cz"> 
                        <a className="fa fa-plus-square-o addBtn" onClick={this.props.addItem}></a>
                        <a className="fa fa-minus-square-o delBtn"  onClick={this.props.delItem}></a>
                      </span>
                </li>
    }
});
var SelectField=React.createClass({
        mixins: [ React.addons.LinkedStateMixin,Editmixin,Choicesmixin ],
        render:function(){
            var selectItem=[];
            for(var i=0,len=this.state.choices.length;i<len;i++){
                selectItem.push(<SelectFieldAppendLI key={i} data={this.state.choices[i]} checkedChange={this.checkedChange} inputValue={this.inputValue} addItem={this.addItem} delItem={this.delItem} />);
            }
          return  <div className="fieldEdit TextareaField">
                     <div className="title"><i className="fa fa-edit"></i>下拉框</div>
                     <div className="edit_item">   
                         <div className="tit">标题</div>   
                         <div className="write"> 
                              <input type="text" className="sf-tit-value" name="tit_value" valueLink={this.linkState('title')} placeholder="未命名"/>
                         </div>
                     </div>
                     <div className="edit_item">  
                         <div className="tit">选项</div> 
                         <ul className="write appendLi">
                                {selectItem}
                              <div className="tr tianjiaDiv mt5">
                                <a className="tianjia add_radio pr5" href="javascript:;">添加选项</a>| 
                                <a className="add_multiple_choices" href="javascript:;" onClick={this.batchEdit}> 批量编辑</a>
                              </div>
                          </ul>
                     </div>
                     <div className="edit_item">   
                       <div className="tit">校验</div>   
                       <div className="write">     
                           <ul>     
                               <li className=""><label className="checkbox" ><input type="checkbox" checkedLink={this.linkState('required')}/>必须选</label></li>           
                           </ul>   
                       </div>
                      </div>
                  </div>
              }
    });
    ReactDOM.render(
        <AddField/>,
        document.getElementById('form')
        )