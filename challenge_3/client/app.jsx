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
    let update = Object.assign(this.state, {id: this.props.id});
    axios.put('/user', update)
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
    let update = Object.assign(this.state, {id: this.props.id});
    axios.put('/user', update)
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
    let update = Object.assign(this.state, {id: this.props.id});
    axios.put('/user', update)
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
  let handleClick = function (e) {
    e.preventDefault();
    axios.post('/user', {})
      .then((res) => {
        console.log(res.data.insertedId);
        formClick(res.data.insertedId);
      })
      .catch(err => console.log(err))
  }

  return (
    <div id="checkout">
      <div>Continue to checkout...</div>
      <button onClick={handleClick}>Checkout!</button>
    </div>
  )
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      addressl1: '',
      addressl2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      card: '',
      expmonth: '',
      expyear: '',
      cvv: '',
      billingzip: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.formClick();
  }

  componentDidMount() {
    let id = Object.assign({}, {id: this.props.id});
    console.log(id);
    axios.get('/user', id)
      .then((res) => {
        console.log(res);
        this.setState(res.data[0]);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <label>Name:</label>
        <div>{this.state.name}</div><br />
        <label>Email:</label>
        <div>{this.state.email}</div><br />
        <label>Address</label><br></br>
        <div>{this.state.addressl1}</div><br />
        <div>{this.state.addressl2}</div><br />
        <div>{this.state.city}</div><a>,</a>
        <div>{this.state.state}</div><a> </a>
        <div>{this.state.zipcode}</div><br />
        <label>Phone Number</label><br></br>
        <div>{this.state.phone}</div><br />
        <label>Card Number</label><br />
        <div>{this.state.card}</div><br />
        <label>Exp Month</label><br />
        <div>{this.state.expmonth}</div><br />
        <label>Exp Year</label><br />
        <div>{this.state.expyear}</div><br />
        <label>CVV</label><br></br>
        <div>{this.state.cvv}</div><br />
        <label>Billing Zip Code</label><br />
        <div>{this.state.billingzip}</div><br />
        <button onClick={this.handleClick}>Purchase</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formNumber: 0,
      id: ''
    }
    this.formClick = this.formClick.bind(this);
  }

  formClick(id = this.state.id) {
    let form = this.state.formNumber;
    if (this.state.formNumber === 4) {
      form = 0;
    } else {
      form++;
    }
    this.setState({ formNumber: form, id: id})
  }

  render() {
    let form;
    switch (this.state.formNumber) {
      case 0:
        form = <F0 formClick={this.formClick} />;
        break;
      case 1:
        form = <F1 formClick={this.formClick} id={this.state.id} />;
        break;
      case 2:
        form = <F2 formClick={this.formClick} id={this.state.id} />;
        break;
      case 3:
        form = <F3 formClick={this.formClick} id={this.state.id} />;
        break;
      case 4:
        form = <Summary formClick={this.formClick} id={this.state.id} />;
        break;
      default:
        form = <F0 formClick={this.formClick} />;
    }
    return (
      <div>
        {form}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));