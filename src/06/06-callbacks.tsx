import React, {MouseEvent} from 'react'

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const onNameChanged = () => {
        console.log("name changed")
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input type="text"/>

        <button name="delete" onClick={deleteUser}>delete</button>
        <button name="save" onClick={deleteUser} >save</button>
    </div>
}