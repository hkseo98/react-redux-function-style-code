import Update from '../components/Update'
import { connect } from 'react-redux'

export default connect(
    function(state) {
        let title, desc
        for(let i=0; i<state.contents.length; i++){
            if (state.selected_content_id === state.contents[i].id){
                title = state.contents[i].title;
                desc = state.contents[i].desc;
                break;
            }
        }
        return {
            title,
            desc
        }
    },
    function(dispatch) {
        return {
        onSubmit:function(title, desc) {
            dispatch({type:"UPDATE_PROCESS", title, desc})
        }
    }
    }
)(Update)