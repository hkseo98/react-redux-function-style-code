import { useState } from 'react';

export default function Update(props) {
    let [title, setTitle] = useState(props.title)
    let [desc, setDesc] = useState(props.desc)
    
    return (
        <form onSubmit={function(e){
            e.preventDefault();
            props.onSubmit(title, desc)
        }}>
            <p><input type="text" name="title" placeholder="title" value={title} onChange={
                function(e) {
                    setTitle(e.target.value)
                }
            }></input></p>
            <p><textarea type="text" name="desc" placeholder="description" value={desc} onChange={
                function(e) {
                    setDesc(e.target.value)
                }
            }></textarea></p>
            <p><button type="submit" name="submit">submit</button></p>
        </form>
    )
}