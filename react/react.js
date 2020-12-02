// (1:40:)W10D3
(function() {
    class MyHTML extends React.Component {

// (1:47:)W10D3
constructor(data) {
    super(data);
    this.clickCount = 0;
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
}

// (1:49:)W10D3
addOne() {
    this.setState(() => this.clickCount++)
}

removeOne() {
    this.setState(() => this.clickCount--)
}

// (1:45:)W10D3
        render() {
            return (
                <div>
                    {/* <h1>This is a react text</h1> */}
                    <h1>{this.props.text}</h1>
                    <h2>You have clicked { this.clickCount } times.</h2>
                    <button onClick={this.addOne}>Add one</button>
                    <button onClick={this.removeOne}>Remove One</button>
                </div>
            );
        }
    }
// (1:43:)W10D3
    ReactDOM.render(<MyHTML text="Call to MyHTML 1"/>, document.getElementById("react-wrapper"));
    ReactDOM.render(<MyHTML text="Call to MyHTML 2 Woop"/>, document.getElementById("react-wrapper-one"));

})();