import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionsTypes from '../../Store/Actions/actions'
import * as actionsCreaters from '../../Store/Actions/index'
import './Counter.css'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }

    }
    render() {
        return (
            <div>
                <CounterOutput value={this.props.counterProp} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter} />
                <hr />
                <button className='button' onClick={() => this.props.onStoreResult(this.props.counterProp)}>Store Result</button>
                <ul className='UL'>
                    {this.props.storedResult.map(strRslt => (
                        <li key={strRslt.Value} onClick={() => this.props.onDeleteResult(strRslt.id)}>{strRslt.Value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        counterProp: state.counterReducer.ouch,
        storedResult: state.resultReducer.results
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionsCreaters.increment()),
        onDecrementCounter: () => dispatch(actionsCreaters.decrement()),
        onAddCounter: () => dispatch(actionsCreaters.add(10)),
        onSubstractCounter: () => dispatch(actionsCreaters.substract(15)),
        onStoreResult: (result) => dispatch(actionsCreaters.store_result(result)),
        onDeleteResult: (id) => dispatch(actionsCreaters.delete_result(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);