const initialState = {
    articles:[
        {id:1, name:"adidas", }
    ]
}

export default function panierReducer(state=initialState, action){
    switch(action.type){
        case "ADDING_ARTICLE":
            return {...state,}
    }
}