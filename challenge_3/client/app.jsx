class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" id="name" name="name" required></input><br></br>
        <label>Email:</label>
        <input type="text" id="email" name="email" required></input><br></br>
        <label>Password:</label>
        <input type="password" id="password" name="password" required></input><br></br>
        <button type="submit" onClick={this.props.formClick}>Next</button>
      </form>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressl1: '',
      addressl2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }
  }

  render() {
    return (
      <form>
        <label>Address</label><br></br>
        <input type="text" id="addressl1" name="addressl1" placeholder="Address Line 1"></input><br></br>
        <input type="text" id="addressl2" name="addressl2" placeholder="Address Line 2"></input><br></br>
        <input type="text" id="city" name="city" placeholder="San Francisco"></input><a>,</a>
        <input type="text" id="state" name="state" placeholder="CA"></input><a> </a>
        <input type="text" id="zip" name="zip" placeholder="94103"></input><br></br>
        <label>Phone Number</label><br></br>
        <input type="text" id="phone" name="phone" placeholder="111-123-1234"></input><br></br>
        <button type="submit" onClick={this.props.formClick}>Next</button>
      </form>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: '',
      expmonth: '',
      expyear: '',
      cvv: '',
      billingzip: ''
    }
  }


  render() {
    return (
      <form>
        <label>Card Number</label><br></br>
        <input type="text" id="card" name="card" placeholder="1111-2222-3333-4444"></input><br></br>
        <label>Exp Month</label><br></br>
        <input type="text" id="expmonth" name="expmonth" placeholder="Jan"></input><br></br>
        <label>Exp Year</label><br></br>
        <input type="text" id="expyear" name="expyear" placeholder="2020"></input><br></br>
        <label>CVV</label><br></br>
        <input type="text" id="cvv" name="cvv" placeholder="123"></input><br></br>
        <label>Billing Zip Code</label><br></br>
        <input type="text" id="billingzip" name="billingzip" placeholder="00001"></input><br></br>
        <button type="submit" onClick={this.props.formClick}>Complete Checkout!</button>
      </form>
    )
  }
}

var F0 = function ({formClick}) {
  return (
    <form id="checkout">
      <button onClick={formClick}>Checkout!</button>
    </form>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formNumber: 0
    }
    this.formClick = this.formClick.bind(this);
  }

  formClick() {
    let form = this.state.formNumber;
    if (this.state.formNumber === 3) {
      form = 0;
    } else {
      form++;
    }
    this.setState({formNumber: form})
  }

  render() {
    let form;
    switch (this.state.formNumber) {
      case 0:
        form = <F0 formClick={this.formClick}/>;
        break;
      case 1:
        form = <F1 formClick={this.formClick}/>;
        break;
      case 2:
        form = <F2 formClick={this.formClick}/>;
        break;
      case 3:
        form = <F3 formClick={this.formClick}/>;
        break;
    }
    return (
      <div>
        {form}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));