import Home from '../components/Home';
import { connect } from 'react-redux'
import { addTodo } from '../services/Action/action'


const mapDispatchToProps = dispatch => ({
    addTodoHandler: data => dispatch(addTodo(data))
});


export default connect(null, mapDispatchToProps)(Home);