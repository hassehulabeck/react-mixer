export function NotPresentList({ children}) {

    const styling = {
        gridColumn: 1,
        gridRow: 3,                /* bottom-left */
        overflow: "auto",
        backgroundColor:"darksalmon",
    }
    const flexing = {
        display: "flex",
        padding: "1rem"
    }
    return (
        <div style={styling}>
            <h1>Not present</h1>
            <div style={flexing}>
                { children }
            </div>
        </div>
    )
}