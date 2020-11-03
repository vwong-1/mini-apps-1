class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    axios.post('/user', this.state)
      .then((res) => {
        console.log(res);
        this.props.formClick();
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" id="name" name="name" onChange={this.handleInputChange} /><br />
        <label>Email:</label>
        <input type="text" id="email" name="email" onChange={this.handleInputChange} /><br />
        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={this.handleInputChange} /><br />
        <button type="submit" onClick={this.handleClick}>Next</button>
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    axios.post('/user', this.state)
      .then((res) => {
        console.log(res);
        this.props.formClick();
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form>
        <label>Address</label><br></br>
        <input type="text" id="addressl1" name="addressl1" placeholder="Address Line 1" onChange={this.handleInputChange} /><br />
        <input type="text" id="addressl2" name="addressl2" placeholder="Address Line 2" onChange={this.handleInputChange} /><br />
        <input type="text" id="city" name="city" placeholder="San Francisco" onChange={this.handleInputChange} /><a>,</a>
        <input type="text" id="state" name="state" placeholder="CA" onChange={this.handleInputChange} /><a> </a>
        <input type="text" id="zipcode" name="zipcode" placeholder="94103" onChange={this.handleInputChange} /><br />
        <label>Phone Number</label><br></br>
        <input type="text" id="phone" name="phone" placeholder="111-123-1234" onChange={this.handleInputChange} /><br />
        <button type="submit" onClick={this.handleClick}>Next</button>
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    axios.post('/user', this.state)
      .then((res) => {
        console.log(res);
        this.props.formClick();
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form>
        <label>Card Number</label><br />
        <input type="text" id="card" name="card" placeholder="1111-2222-3333-4444" onChange={this.handleInputChange} /><br />
        <label>Exp Month</label><br />
        <input type="text" id="expmonth" name="expmonth" placeholder="Jan" onChange={this.handleInputChange} /><br />
        <label>Exp Year</label><br />
        <input type="text" id="expyear" name="expyear" placeholder="2020" onChange={this.handleInputChange} /><br />
        <label>CVV</label><br></br>
        <input type="text" id="cvv" name="cvv" placeholder="123" onChange={this.handleInputChange} /><br />
        <label>Billing Zip Code</label><br />
        <input type="text" id="billingzip" name="billingzip" placeholder="00001" onChange={this.handleInputChange} /><br />
        <button type="submit" onClick={this.handleClick}>Complete Checkout!</button>
      </form>
    )
  }
}

var F0 = function ({ formClick }) {
  return (
    <div id="checkout">
      <button onClick={formClick}>Checkout!</button>
    </div>
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
    this.setState({ formNumber: form })
  }

  render() {
    // console.log(this.state);
    let form;
    switch (this.state.formNumber) {
      case 0:
        form = <F0 formClick={this.formClick} />;
        break;
      case 1:
        form = <F1 formClick={this.formClick} />;
        break;
      case 2:
        form = <F2 formClick={this.formClick} />;
        break;
      case 3:
        form = <F3 formClick={this.formClick} />;
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