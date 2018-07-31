import React, {Component} from "react";
export class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }

  updateValue = (e) => {
    const val = e.target ?  e.target.value : "";
    console.log(val);
    this.setState({
      value: val
    });
  }

  render(){
    const {className, title, name, input, type, placeholder, editValue} = this.props;
    return(
      <div className="form-input">
        <label className="form-input__label">{title}</label>
        <input className={`${className} form-input__input`} type={type} placeholder={placeholder} value={ editValue && this.state.value == "" ? editValue : this.state.value} onChange={(e) => this.updateValue(e)} {...input}/>
      </div>
    );
  }
}
export class FormTextArea extends Component {
  render(){
    const {className, title, name, input, type, placeholder, editValue} = this.props;
    return(
      <div className="form-textarea">
        <label className="form-textarea__label">{title}</label>
        <textarea className={`${className} form-textarea__input`} type={type}  placeholder={placeholder} rows="5"  {...input}></textarea>
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
export class FormImage extends Component {


  handleSelectedImage = (event) => {
    const {onChange} = this.props.input;
    let img = document.getElementById("frm-img");
    img.src = URL.createObjectURL(event.target.files[0]);
    this.props.input.value = event.target.files[0];
  }
  render(){
    let {className, title, name, imageURL, type, input} = this.props;
    return(
      <div className={`form-image ${className}`}>
        <label className="form-image__title">{title}</label>
        <img className="form-image__image" id="frm-img" src={imageURL} />
        <input className="form-image__replace" type="button" value="Replace" onClick={() => document.getElementById("file") ? document.getElementById("file").click() : ''}/>
        <input type={type} style={{display: 'none'}} id="file" name="file" accepts="image/*" {...input} onChange={(event) => this.handleSelectedImage(event)}/>
      </div>
    );
  }
}
