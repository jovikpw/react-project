import React from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props)
    {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(()=>{
            this.setState({
            status:1
        });
        }, 3000);
        console.log("Constructor");
    };
    componentWillMount()
    {
        console.log("Component Will Mount");
    }
    componentDidMount()
    {
        console.log("Component Did Mount");
    }
    componentWillReceiveProps(nextProps)
    {
        console.log("Component Will Recieve Props", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("Should Component Update", nextProps, nextState);
        // if (nextState.status === 1)
        // {
        //     return false;
        // }
        return true;
    }
    componentWillUpdate(nextProps, nextState)
    {
        console.log("Component Will Update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("Component Did Update", prevProps, prevState);
    }
    componentWillUnmount()
    {
        console.log("Component Will Unmount");
    }

    onMakeOlder()
    {
        this.setState({
           age: this.state.age + 3
    });
    }
    onChangeLink()
    {
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event)
    {
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {

        return(
            <div>
                <p>New Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick = {this.onMakeOlder.bind(this)} className = "btn btn-primary">Make me older!</button>
                <br/><br/><button onClick = {this.props.greet.bind(this)} className = "btn btn-primary">Welcome!</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event)=> this.onHandleChange(event)}/>
                <button onClick = {this.onChangeLink.bind(this)} className = "btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes =
{
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};