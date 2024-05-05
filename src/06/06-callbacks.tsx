import React, {ChangeEvent, MouseEvent} from 'react'

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.name
    }

    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        console.log("age changed" + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="search" onClick={search}>search</button>
    </div>
}