export default function Create(props) {
    return (
        <form onSubmit={function(e){
            e.preventDefault();
            props.onSubmit(e.target.title.value, e.target.desc.value)
        }}>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea type="text" name="desc" placeholder="description"></textarea></p>
            <p><button type="submit" name="submit">submit</button></p>
        </form>
    )
}