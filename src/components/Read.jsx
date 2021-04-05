export default function Read(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}