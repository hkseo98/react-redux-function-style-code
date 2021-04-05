import { connect } from 'react-redux'


function Header(props) {
    return (
    <header>
        <h1><a href="#welcome" onClick={function(){
            props.onClick();
        }}>WEB</a></h1>
        World Wide Web
    </header>
    )
}

export default connect(null, function(dispatch) {
return{
    onClick: function() {
        dispatch({type:"WELCOME"})
    }
}
})(Header);