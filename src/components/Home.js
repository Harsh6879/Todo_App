import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }
    handleClick(addTodoHandler) {
        if (this.state.input === '')
            return;
        else
            addTodoHandler({ input: this.state.input, id: uuidv4() });
    }
    render() {
        const { addTodoHandler } = this.props;
        return (
            <div>
                <h1>Todo</h1>
                <div>
                    <input type="text" onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} /><br /><br />
                    <button onClick={() => {
                        this.handleClick(addTodoHandler);

                    }}>Add</button>
                </div>
                <div>

                </div>
            </div >
        );
    }
}
export default Home;