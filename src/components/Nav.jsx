export default function Nav(props) {
    let tags = []
    for(let i=0; i<props.data.length; i++) {
    tags.push(<li key={i}><a href="#" id={i+1} onClick={function(e) {
        props.onClick(Number(e.target.id))
        // console.log(e.target.id)
    }}>{props.data[i].title}</a></li>)
    }
    return (
        <nav>
            <ol>
                {tags}
            </ol>
        </nav>
    )
}