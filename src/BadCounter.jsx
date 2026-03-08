import {useState} from 'react'

// This is an example of something that doesn't work. It is not an example of good React code.

export function BadCounter() {

    // count starts as undefined. If we give it a value, it will always re-render with that value.
    let count
    const handleClick = () => {

        // First time we change the value from undefined to 0. You should only see the text conversion once.
        if (typeof(count) === 'undefined'){
            count = 0
            console.log("Conversion")
        }
        count = count + 1

        // You should see Number and an increasing value
        console.log(typeof(count) + " " + count )
    }

    return (
        <div>
            {/* Note that count will not be displayed, as it is always undefined in the re-render */}
            <button onClick={handleClick}>Increase {count} by 1</button>
        </div>
    )

}