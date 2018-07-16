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

export class FormButton extends Component {
  render(){
    const {className, title, type, name} = this.props;
    return(
      <div className={`${className} form-button`}>
        <button className="form-button__button" >{title}</button>
      </div>
    );
  }
}
