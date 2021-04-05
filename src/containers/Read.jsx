import { connect } from 'react-redux'
import Read from '../components/Read'

export default connect(
    function(state) {
        let title, desc;
        if (state.mode === "WELCOME") {
            title = state.welcome_content.title
            desc = state.welcome_content.desc
        } else {
            for(let i=0; i<state.contents.length; i++){
                if (state.selected_content_id === state.contents[i].id){
                    title = state.contents[i].title;
                    desc = state.contents[i].desc;
                    break;
                }
            }
        }
        return {
            title:title,
            desc:desc
        }
    }
)(Read);