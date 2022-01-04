export const addRoomToState = (data) => {
    return {
        type: "ADD_ROOM",
        payload: {
            data
        }
    }
}