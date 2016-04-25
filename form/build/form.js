/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-02 12:32:40
 * @version $Id$
 */  
    var field=['单行文字','多行文字','单项选择','多项选择','下拉框','数字','邮箱','电话','地理位置','时间','评分','微信扫码','子表单'];
    var textJson={"title":"单行文字","default":"单行文字默认值","tis":"单行文字提示","required":false,"readonly":true,"minValue":"","maxValue":""};
    var textareaJson={"title":"多行文字","default":"多行文字默认值","tis":"多行文字提示","required":false,"readonly":false,"minValue":"","maxValue":""};
    var radioJson={"title":"单项选择","radio":[{"checked":false,"value":"111"},{"checked":true,"value":"111"},{"checked":false,"value":"111"}],"required":false,"minValue":"","maxValue":""};
    var _AddField,_FieldList,_TextPreview;
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
        show:function(){
            this.setState({ 
              isHidden:true
            })
        },
        getInitialState:function(){
            console.log("getInitialState");
            _AddField=this;
            return {previewList:[],editIteming:[],databox:[],isHidden:false}//展示列表，编辑项目，json
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
        appendEdit:function(data){
          this.replaceState({
            ...this.state,
            editIteming:[data]
          });
        },
        render:function(){
            console.log(this.state)
            return <div id="addField" className="sfFormBox" >
                <div className="sfFormMain">
                <div className="previewBox">
                  {this.state.previewList.map(function(item,i){
                          return React.cloneElement(item,{
                             key:i,
                             data:this.state.databox[i],
                             index:i
                          })
                       }.bind(this))}
                </div> 
                <div className="addField" onClick={this.show} style={{"display":this.state.isHidden?"none":"block"}}> +添加新字段</div>
                <FieldList />
                </div>  
                <div className="sfForm_editBox">
                  {this.state.editIteming.map(function(item,i){
                        return React.cloneElement(item,{
                           key:Math.random(),
                        })
                     }.bind(this))}
                </div>  
            </div> 
        }
    });
var FieldList=React.createClass({//LI字段列表
        getInitialState:function(){
            return textJson;
        },
        componentWillMount:function(){
          console.log('FieldList=>FieldListcomponentWillMount')
        },
        componentDidMount:function(){
          console.log('FieldList=>FieldListcomponentDidMount')
        },
        componentWillUpdate:function(){
          console.log('FieldList=>FieldListcomponentWillUpdate')
        },
        componentDidUpdate:function(){
          console.log('FieldList=>FieldListcomponentDidUpdate')
        },
        handleClick:function(e){
            _AddField.state.isHidden=! _AddField.state.isHidden;
            switch($(e.target).attr('data-type')){
                case '单行文字':
                    _AddField.state.databox.push(textJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'单行文字'} dataJson={textJson}/>);
                    _AddField.appendEdit(<TextField />);
                break;
                case '多行文字':
                    _AddField.state.databox.push(textareaJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'多行文字'}/>);
                     _AddField.appendEdit(<TextareaField />);
                break;
                case '单项选择':
                    _AddField.state.databox.push(radioJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'单项选择'}/>);
                    _AddField.appendEdit(<RadioField />);
                break;
                case '多项选择':
                    _AddField.state.databox.push(checkboxJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'多项选择'}/>);
                     _AddField.appendEdit(<CheckboxField />);
                break;
                case '下拉框':
                    _AddField.state.databox.push(selectJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'下拉框'}/>);
                    _AddField.appendEdit(<SelectField />);
                break;
                case '两级下拉框':
                    _AddField.state.databox.push(textareaJson);
                    _AddField.state.previewList.push(<TextPreview data-type={'两级下拉框'}/>);
                     _AddField.appendEdit(<TextareaField />);
                break;
            }
       },
        render:function(){
            var fieldlist=[];
            field.forEach(function(title,i){
                 return fieldlist.push(
                    <li key={i} onClick={this.handleClick} data-type={title}>{title}</li>
                    )
            }.bind(this));
            return  <ul className="fieldList"  style={{"display":_AddField.state.isHidden?"flex":"none"}} >
                    {fieldlist}
                    </ul>      
        }
    });
var TextPreview=React.createClass({//左边字段展示列表
        getInitialState:function(){
         if(this.props.index+1==_AddField.state.databox.length){
          _TextPreview=this;
         }
          return textJson;
        },
        updateState:function(data){
          this.setState(data)
        },
        componentWillMount:function(){
          console.log("TextPreview=>componentWillMount"+this.props.index);
          var oldData=_AddField.state.databox[this.props.index];
          if(oldData){
              this.setState(oldData)
          }
        },
        updateTop:function(){
          var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
          var top=$currentDiv.offset().top+$currentDiv.height()/2-49;
          if($currentDiv.index()==0){top=0}
          $('.sfForm_editBox').css("top",top);
        },
        handleClick:function(e){
            
          console.log("TextPreview=>handleClick");
          _TextPreview=this;
          $(ReactDOM.findDOMNode(this.refs.formItem)).addClass('active').siblings('.previewItem').removeClass('active');
          this.updateTop();
          _AddField.appendEdit(<TextField data={_AddField.state.databox[this.props.index]}/>);
        },
        componentDidMount:function(){
          console.log("TextPreview=>componentDidMount");
          var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
          $currentDiv.addClass('active').siblings('.previewItem').removeClass('active');
          this.updateTop();
        },
        componentWillUpdate:function(){
          console.log("TextPreview=>componentWillUpdate")
        },
        componentDidUpdate:function(){
          console.log("TextPreview=>componentDidUpdate")
           _AddField.state.databox[this.props.index]=this.state;
        },
        render:function(){
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
            <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                <div className="readOnly"><input id="" type="text" readOnly="readOnly" value={this.state.default} placeholder={this.state.tis}/></div>
                </div>
          }
    });
var TextareaPreview=React.createClass({//左边字段展示列表
        getInitialState:function(){
         if(this.props.index+1==_AddField.state.databox.length){
          _TextPreview=this;
         }
          return textareaJson;
        },
        updateState:function(data){
          this.setState(data)
        },
        componentWillMount:function(){
          var oldData=_AddField.state.databox[this.props.index];
          if(oldData){
              this.setState(oldData)
          }
        },
        updateTop:function(){
          var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
          var top=$currentDiv.offset().top+$currentDiv.height()/2-49;
          if($currentDiv.index()==0){top=0}
          $('.sfForm_editBox').css("top",top);
        },
        handleClick:function(e){
          _TextPreview=this;
          $(ReactDOM.findDOMNode(this.refs.formItem)).addClass('active').siblings('.previewItem').removeClass('active');
          this.updateTop();
          _AddField.appendEdit(<TextareaField data={_AddField.state.databox[this.props.index]}/>);
        },
        componentDidMount:function(){
          var $currentDiv=$(ReactDOM.findDOMNode(this.refs.formItem));
          $currentDiv.addClass('active').siblings('.previewItem').removeClass('active');
          this.updateTop();
        },
        componentDidUpdate:function(){
           _AddField.state.databox[this.props.index]=this.state;
        },
        render:function(){
            return <div className="previewItem" data-index={this.props.index} ref="formItem" onClick={this.handleClick} data-type={this.props['data-type']}>
            <div className="title">{this.state.title}<span className="red ml5">{this.state.required?"*":""}</span></div>
                <div className="readOnly"><input id="" type="text" readOnly="readOnly" value={this.state.default} placeholder={this.state.tis}/></div>
                </div>
          }
    });
var TextField=React.createClass({//编辑单行文字字段
      mixins: [ React.addons.LinkedStateMixin ],
       getInitialState:function(){ 
          console.log("TextField=>getInitialState");
          return textJson;
        },
        componentWillMount:function(){
          console.log("TextField=>componentWillMount=>");
          if(this.props.data){
            this.setState(this.props.data);
          }else{
            this.setState(textJson);
          }
        },
        componentDidMount:function(){
          console.log("TextField=>componentDidMount");
         // this.setState(textJson);
        },
        componentWillUpdate:function(){
          console.log("TextField=>componentWillUpdate");
        },
        componentDidUpdate:function(){
          console.log("TextField=>componentDidUpdate")
          _TextPreview.updateState(this.state);
        },
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
var TextareaField=React.createClass({//编辑多行文字字段
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState:function(){
          return textareaJson;
        },
        componentWillMount:function(){
          console.log("TextareaField=>componentWillMount");
          if(this.props.data){
            this.setState(this.props.data);
          }else{
            this.setState(textareaJson);
          }
        },
        componentDidMount:function(){
          console.log("TextareaField=>componentDidMount")
        },
        componentWillUpdate:function(){
           console.log("TextareaField=>componentWillUpdate")
        },
        componentDidUpdate:function(){
          console.log("TextareaField=>componentDidUpdate")
          _TextPreview.updateState(this.state);
        },
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
var RadioFieldAppendLI=React.createClass({
    render:function(){
        return <li className="flexCenter">
                      <input type="radio" name="radio" checked={this.props.data.checked} onChange={this.props.radioCheck} />
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
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState:function(){
          return radioJson;
        },
        radioCheck:function(e){
            var index=$(e.target).parent('li').index();
            for(var i=0,radio=this.state.radio;i<radio.length;i++){
                if(index==i){
                    radio[i].checked=!radio[i].checked
                }else{
                    radio[i].checked=false;
                }
            }
            this.setState({});
        },
        inputValue:function(e){
            var index=$(e.target).parents('li').index();
            this.state.radio[index].value=e.target.value;
            this.setState(this.state);
        },
        addItem:function(e){
            var index=$(e.target).parents('li').index();
            var itemJson={"checked":false,"value":222};
            this.state.radio.splice(index+1,0,itemJson);
            this.setState({});
        },
        delItem:function(e){
            var index=$(e.target).parents('li').index();
            this.state.radio.splice(index,1);
            this.setState({});
        },
        render:function(){
            var radioItem=[];
            for(var i=0,len=this.state.radio.length;i<len;i++){
                radioItem.push(<RadioFieldAppendLI key={i} data={this.state.radio[i]} radioCheck={this.radioCheck} inputValue={this.inputValue} addItem={this.addItem} delItem={this.delItem} />);
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
                              {// <li className="flexCenter">
                              //     <input type="radio" name="radio" checked={this.state.radio[0].checked} onChange={this.radioCheck} />
                              //     <label className="labeldiv">
                              //       <input type="text"  placeholder="选项" value={this.state.radio[0].value} onChange={this.inputValue}/>
                              //     </label>
                              //     <span className="cz"> 
                              //       <a className="fa fa-plus-square-o addBtn"></a>
                              //       <a className="fa fa-minus-square-o delBtn"></a>
                              //     </span>
                              // </li>
                              // <li className="flexCenter">
                              //     <input type="radio" name="radio" checked={this.state.radio[1].checked} onChange={this.radioCheck}/>
                              //     <label className="labeldiv">
                              //       <input type="text" placeholder="选项" value={this.state.radio[1].value} onChange={this.inputValue}/>
                              //     </label>
                              //     <span className="cz"> 
                              //       <a className="fa fa-plus-square-o addBtn"></a>
                              //       <a className="fa fa-minus-square-o delBtn"></a>
                              //     </span>
                              // </li>
                              // <li className="flexCenter">
                              //     <input type="radio" name="radio" checked={this.state.radio[2].checked} onChange={this.radioCheck}/>
                              //     <label className="labeldiv">
                              //       <input type="text" placeholder="选项" value={this.state.radio[2].value} onChange={this.inputValue}/>
                              //     </label>
                              //     <span className="cz"> 
                              //       <a className="fa fa-plus-square-o addBtn"></a>
                              //       <a className="fa fa-minus-square-o delBtn"></a>
                              //     </span>
                              // </li>
                               }
                              <div className="tr tianjiaDiv mt5">
                                <a className="tianjia add_radio pr5" href="javascript:;">添加选项</a>| 
                                <a className="add_multiple_choices" href="javascript:;"> 批量编辑</a>
                              </div>
                          </ul>
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
    ReactDOM.render(
        <AddField/>,
        document.getElementById('form')
        )