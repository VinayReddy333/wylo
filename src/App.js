import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    title: 'good',
    Post: "good video",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    title: 'movie is good',
    Post: "The Direction",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    title: 'Kalki 2898AD',
    Post: 'IN Whole Movie is Start Amitabh Bachchan',
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    title: '',
    Post: '',
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onAddContact = event => {
    event.preventDefault()
    const {title, Post} = this.state
    const newContact = {
      id: uuidv4(),
      title,
      Post,
      isFavorite: false,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      title: '',
      Post: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({title: event.target.value})
  }

  onChangeName = event => {
    this.setState({Post: event.target.value})
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">POST</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="title"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Post"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Title</p>
              <hr className="separator" />
              <p className="table-header-cell">Post</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App

