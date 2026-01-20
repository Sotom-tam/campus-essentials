interface InputProps{
    name:string;
    for:string;
    label:string;
    type:string;
    placeholder:string;
}
function Input(props:InputProps){
    return<div className="form-group">
        <label htmlFor={props.for} >{props.label}</label>
        <input name={props.name} type={props.type} placeholder={props.placeholder}/>

    </div>
}
export default Input