
export default function Button({texto,color,shadowColor}:{texto: string,color:string,shadowColor:string}){
  return (
    <button className="Downlo" style={{"background": color, "boxShadow": `inset 0px -2px 1px 1px ${shadowColor}` }} >{texto}</button>
  )
}