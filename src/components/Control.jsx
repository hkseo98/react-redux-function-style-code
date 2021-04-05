
export default function Control(props) {
    return(
        <div>
            <button id="create" onClick={function(){
                props.onClick('CREATE')
            }}>create</button>
            <button id="update" onClick={function(){
                props.onClick('UPDATE')
            }}>update</button>
            <button id="delete" onClick={function(){
                props.onClick('DELETE')
            }}>delete</button>
        </div>
    ) 
}