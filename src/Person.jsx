export function Person({firstname, lastname, isPresent = true, onClick}) {
    return (
        <article className="person" onClick={onClick}>
            <h2>{ firstname }<span> { lastname }</span></h2>
        </article>
    )
}