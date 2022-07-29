const initState={
    x:100,
    firstname:"zied",
    lastname:"belguith"
}

const reducer=(state=initState,action)=>{
   if(action.type=="INCREMENT"){
    return {
        ...state,
        x:state.x+1}
   }else if(action.type=="DECREMENT")
   {
    return {
        ...state,
        x:state.x-1}
   }
   else{
    return state
   }

}

export default reducer