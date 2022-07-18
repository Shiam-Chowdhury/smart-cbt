export const getQuestions = () => {
    return (dispatch) => {
        dispatch({
            type: "getQuestions"
        })
    }
}

export const getQuestionSets = () => {
    return (dispatch) => {
        dispatch({
            type: "getQuestionSets"
        })
    }
}