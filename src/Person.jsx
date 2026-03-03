export function Person({firstname, lastname, isPresent = true}) {
    return (
        <article className="person">
            <p>{ isPresent ? 'present' : 'not present' }</p>
            <h2>{ firstname }<span> { lastname }</span></h2>
        </article>
    )
}