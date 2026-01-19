interface ToastProps{
    text:string
}
// interface ToastAnimationProps{
//   animationName:string,
//   animationDuration:string,
//   animationTimingFunction:string,
//   animationIterationCount:number,
//   animationDirection:string,
// }
// const ToastAnimation:ToastAnimationProps={
//     animationName: "scrollintoview",
//     animationDuration: "4500ms",
//     animationTimingFunction: "ease-in-out",
//     animationIterationCount: 1,
//     animationDirection: "normal"
// }
function Toast(props:ToastProps){
    return <>
        <div className="toast">
            <p>{props.text}</p>
        </div>
    </>
}

export default Toast