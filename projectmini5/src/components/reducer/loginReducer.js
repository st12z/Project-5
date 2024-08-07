export function loginReducer(state=false,action){
    switch(action.type){
        case "Check_Login":
            return(
                action.status
            );
        default:
            return state;
    }
}