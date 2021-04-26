import { connect } from 'react-redux';
import ShowList from '../components/ShowList';
import { removeTodo } from '../services/Action/action'

const mapStateToProps = (data) => ({
    listItem: data.listItem
});

const mapDispatchToProps = dispatch => ({
    removeTodoHandler: itemId => dispatch(removeTodo(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);