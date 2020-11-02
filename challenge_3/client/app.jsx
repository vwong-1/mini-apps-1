



class F1 extends React.Component {
  super(props) {
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"></input>

      </form>
    )
  }

}


class App extends React.Component {
  super(props) {
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form id="checkout">
          <button>Checkout</button>
        </form>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));