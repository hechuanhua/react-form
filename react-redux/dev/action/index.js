export const TEXT="TEXT"
export const TEXTAREA="TEXTAREA"
let nextId=0;
export const clickLi=(type)=>{
    return {
        type:type,
    }
}
export const clickPreviewLi=(id)=>{
    return {
        type:"CLICK",
        id
    }
}
export const oncopy=(id)=>{
    return {
        type:"COPY",
        id
    }
}
export const ondelete=(id)=>{
    return {
        type:"DELETE",
        id
    }
}
export const batchEdit=()=>{
    return {
        type:"BATCHEDIT"
    }
}
export const submitDate=(value)=>{
    return {
        type:"SUBMITDATE",
        value
    }
}
export const changeValue=(type,value,id,index)=>{
    switch(type){
        case "title":
            return {type:"TITLE",title:value,id}
        case "default":
            return {type:"DEFAULT",default:value,id}
        case "tis":
            return {type:"TIS",tis:value,id}
        case "minValue":
            return {type:"MINVALUE",minValue:value,id}
        case "maxValue":
            return {type:"MAXVALUE",maxValue:value,id}
        case "required":
            return {type:"REQUIRED",required:value,id}
        case "readonly":
            return {type:"READONLY",readonly:value,id}
        case "choicesChecked":
            return {type:"CHOICESCHECKED",choices:value,id,index}
        case "choicesInput":
            return {type:"CHOICESINPUT",choices:value,id,index}
        case "addItem":
            return {type:"ADDITEM",choices:value,id,index}
        case "delItem":
            return {type:"DELITEM",choices:value,id,index}
    }
}


