import { createStore} from 'redux';

let initState = {
    mode:'WELCOME', 
    welcome_content:{
        title:'WEB',
        desc:'Hello WEB'
    },
    selected_content_id:1,
    contents:[
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JS', desc:'JS is ...'}
    ]
    
}
function reducer(state=initState, action){
    if (action.type === "WELCOME") {
        return {...state, mode:"WELCOME"}
    }
    if (action.type === "READ") {
        return {...state, mode:"READ", selected_content_id:action.id}
    }
    if(action.type === "CREATE"){
        return {...state, mode:"CREATE"}
    }
    if(action.type === "UPDATE"){
        return {...state, mode:"UPDATE"}
    }
    if(action.type === "DELETE"){
        let new_contents = [...state.contents]
        let id = state.selected_content_id
        new_contents.splice(id-1, 1)
        for (let i = id; i<=new_contents.length; i++) {
            new_contents[i-1].id = i
        }
        return {...state, contents:new_contents, mode:"WELCOME"}
    }
    if(action.type === 'CREATE_PROCESS') {
        let new_contents = [...state.contents, {id:state.contents.length+1, title:action.title, desc:action.desc}]
        return {...state, contents:new_contents, mode:"READ", selected_content_id:state.contents.length+1}
    }
    if (action.type === 'UPDATE_PROCESS') {
        let new_contents = [...state.contents]
        let id = state.selected_content_id
        new_contents[id-1] = {id:id, title:action.title, desc:action.desc}
        return {...state, contents:new_contents, mode:"READ"}

    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());