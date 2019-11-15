class InputField extends React.Component {

  constructor(props) {
    super(props);

    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(e) {
    let message = e.target.querySelectorAll('input')[0].value;
    if (message !== '') {
      this.props.handleNewMessage(message, 'out');
      setTimeout(() => {
        this.props.handleNewMessage('No Charlie Do Not Do this!', 'in');
      }, 1500);
      e.target.reset();
    }
    e.preventDefault();
  }

  render() {
    return (
      React.createElement("form", { onSubmit: this.handleNewMessage },
      React.createElement("input", { className: "input__field", type: "text", placeholder: "Type a message" })));


  }}


class InputRow extends React.Component {

  constructor(props) {
    super(props);

    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(inputText, type) {
    this.props.handleNewMessage(inputText, type);
  }

  render() {
    return (
      React.createElement("div", { className: "input__row" },
      React.createElement(InputField, { handleNewMessage: this.handleNewMessage })));


  }}


class Time extends React.Component {
  render() {
    return (
      React.createElement("span", { className: "time" }, this.props.time));

  }}


class Message extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "message__row" },
      React.createElement("span", { className: `message message--${this.props.direction}` },
      this.props.message,
      React.createElement(Time, { time: this.props.time }))));



  }}


class MessageContainer extends React.Component {
  render() {
    let messages = [];
    this.props.messages.forEach(message => {
      messages.push(React.createElement(Message, { message: message.text, direction: message.type, time: message.time }));
    });

    return (
      React.createElement("div", { className: "message__container" },
      messages,
      React.createElement("div", { className: "message__tile" })));


  }}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        text: 'hello!',
        type: 'out',
        time: '10:00 PM' }] };


    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(inputText, type) {
    this.setState((prevState, props) => ({
      messages: [...prevState.messages, { text: inputText, type: type, time: '11:00 PM' }] }));

  }

  render() {
    return (
      React.createElement("div", { className: "app" },
      React.createElement(MessageContainer, { messages: this.state.messages }),
      React.createElement(InputRow, { inputText: this.state.inputText, handleNewMessage: this.handleNewMessage })));


  }}


ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));