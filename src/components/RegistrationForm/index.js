// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isFormSubmitted: false,
  }

  firstNameInput = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameInput = event => {
    this.setState({lastName: event.target.value})
  }

  checkingTheFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  checkingTheLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  submitTheForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        firstName: '',
        lastName: '',
        isFormSubmitted: true,
        isLastNameEmpty: true,
        isFirstNameEmpty: false,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({isFirstNameEmpty: true, isLastNameEmpty: false})
    } else if (lastName === '' && firstName !== '') {
      this.setState({isLastNameEmpty: true, isFirstNameEmpty: false})
    } else {
      this.setState({isLastNameEmpty: true, isFirstNameEmpty: true})
    }
  }

  submitAnotherForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
      isFormSubmitted: false,
    })
  }

  renderTheForm = () => {
    const {firstName, lastName, isFirstNameEmpty, isLastNameEmpty} = this.state

    let firstInputRequired = ''
    let emptyBackGroundFirst = ''
    if (isFirstNameEmpty) {
      firstInputRequired = <p className="required-text">Required</p>
      emptyBackGroundFirst = 'empty-background'
    }

    let lastInputRequired = ''
    let emptyBackGroundLast = ''
    if (isLastNameEmpty) {
      lastInputRequired = <p className="required-text">Required</p>
      emptyBackGroundLast = 'empty-background'
    }

    return (
      <form className="form-card" onSubmit={this.submitTheForm}>
        <div className="input-container-first">
          <label htmlFor="firstName" className="first-name">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            id="firstName"
            className={`first-name-input ${emptyBackGroundFirst}`}
            onBlur={this.checkingTheFirstName}
            onChange={this.firstNameInput}
            value={firstName}
          />
          {firstInputRequired}
        </div>
        <div className="last-name-container">
          <label htmlFor="lastName" className="last-name">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="Last name"
            id="lastName"
            className={`last-name-input ${emptyBackGroundLast}`}
            onChange={this.lastNameInput}
            onBlur={this.checkingTheLastName}
            value={lastName}
          />
          {lastInputRequired}
        </div>
        <button className="button-submit" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderAfterSubmission = () => (
    <div className="form-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        type="button"
        className="success-page-button"
        onClick={this.submitAnotherForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="bg-container">
        <div className="main-container-form">
          <h1 className="main-heading">Registration</h1>
          {isFormSubmitted
            ? this.renderAfterSubmission()
            : this.renderTheForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
