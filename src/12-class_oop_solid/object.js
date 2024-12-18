const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        },
        m() {
            
        }
    }
    return action
}

const action1 = deleteUser("123132")
const action2 = deleteUser("444444")

console.log(action1)
console.log(action2)
// { type: 'DELETE-USER', payload: { userId: '123132' } }
// { type: 'DELETE-USER', payload: { userId: '444444' } }