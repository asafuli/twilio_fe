import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import SelectList from './selectList';

class Form extends Component {
  state = {
    /*Note: For controlled elements - we have to initialize the state with some value 
     (null or undefined are considrered by React aas uncontrolloed elements)
    */
    data: {},
    errors: {}
  };

  validate = () => {
    //validation using JOI
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    const { error } = result;
    if (!error) {
      return null;
    }
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const validateObj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(validateObj, schema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    //adding onChange validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    this.setState({ data, errors });
  };

  handleSubmit = e => {
    //in order to prevernt default submit to server that causes a full page reload
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    //if there are errors - return WITHOUT calling the server
    if (errors) return;

    //if no errors then Call "doSubmit" (i.e specific method per form type handling the server calls)
    this.doSubmit();
  };

  renderSelectList = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <SelectList
        name={name}
        label={label}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className='btn btn-primary'>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
