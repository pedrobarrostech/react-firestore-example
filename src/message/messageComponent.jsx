import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
        }
        this.handleTitleChange     = this.handleTitleChange.bind(this)
        this.handleSubjectChange   = this.handleSubjectChange.bind(this)
        this.handleEmailChange     = this.handleEmailChange.bind(this)
        this.handlePhoneChange     = this.handlePhoneChange.bind(this)
        this.handleMessageChange   = this.handleMessageChange.bind(this)
        this.handleSubmit          = this.handleSubmit.bind(this)
    }

    handleTitleChange (e) {
        this.setState({title: e.target.value});
    }

    handleSubjectChange (e) {
        this.setState({subject: e.target.value});
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
    }

    handlePhoneChange (e) {
        this.setState({phone: e.target.value});
    }

    handleMessageChange (e) {
        this.setState({message: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({
            title: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    render() {
        const { add } = this.props
        const { title, subject, email, phone, message } = this.state
        return (
            <div role='form' className='messageForm'>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id='title' onChange={this.handleTitleChange} placeholder='Nome' value={title} />
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
                            <button type="submit" className='btn-large waves-effect waves-light red darken-3 offset-s1' onClick={() => add(this.state)}>Enviar</button> &nbsp; &nbsp; &nbsp;
                            <button className='btn-large waves-effect waves-light red darken-3 offset-s1' onClick={this.props.clear}>Limpar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Message;