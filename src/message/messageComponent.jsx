import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: ''
    }
    this.handlenameChange = this.handlenameChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  handlenameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  sendMessage() {
    debugger;
    const { firestore } = this.context.store
    firestore.collection('messages').add(this.state).then(() => window.alert('Mensagem enviada com sucesso!'))
  }

  render() {
    const { add } = this.props
    const { name, subject, email, phone, message } = this.state
    return (
      <div role='form' className='messageForm'>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id='name' onChange={this.handlenameChange} placeholder='Nome' value={name} />
            </div>
            <div className="input-field col s6">
              <input id='subject' onChange={this.handleSubjectChange} placeholder='Assunto' value={subject} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id='email' onChange={this.handleEmailChange} placeholder='E-mail' value={email}></input>
            </div>
            <div className="input-field col s6">
              <input id='phone' onChange={this.handlePhoneChange} placeholder='Telefone' value={phone}></input>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id='message' onChange={this.handleMessageChange} placeholder='Comentário' value={message}></input>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button type="submit" className='btn-large waves-effect waves-light red darken-3 offset-s1' onClick={() => this.sendMessage()}>Enviar</button> &nbsp; &nbsp; &nbsp;
                            <button className='btn-large waves-effect waves-light red darken-3 offset-s1' onClick={this.props.clear}>Limpar</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Message;