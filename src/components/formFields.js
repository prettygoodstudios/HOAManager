import React, {Component} from "react";
export class FormInput extends Component {
  render(){
    const {className, title, name, input, type, placeholder} = this.props;
    return(
      <div className="form-input">
        <label className="form-input__label">{title}</label>
        <input className={`${className} form-input__input`} type={type} {...input} placeholder={placeholder} />
      </div>
    );
  }
}
export class FormTextArea extends Component {
  render(){
    const {className, title, name, input, type, placeholder} = this.props;
    return(
      <div className="form-textarea">
        <label className="form-textarea__label">{title}</label>
        <textarea className={`${className} form-textarea__input`} type={type} {...input} placeholder={placeholder} rows="5"></textarea>
      </div>
    );
  }
}
export class FormButton extends Component {
  render(){
    let {className, title, type, name, small, red, onClick} = this.props;
    if(small == undefined){
      small = false;
    }
    if(red == undefined){
      red = false;
    }
    return(
      <div className={`${className} form-button ${small ? 'small' : ''} ${red ? 'red' : ''}`}>
        <button className="form-button__button" onClick={this.props.onClick} type={type}>{title}</button>
      </div>
    );
  }
}
