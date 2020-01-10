import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {

  state = {
    users : [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date(),
    editing: false,
    _id: ''
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({
      users: res.data,
      userSelected: res.data[0].username
    })
    if (this.props.match.params.id) {
      const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
      this.setState({
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        userSelected: res.data.author,
        editing: true,
        _id: this.props.match.params.id
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected
    }
    if(this.state.editing) {
      await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote)
    } else {
      await axios.post('http://localhost:4000/api/notes', newNote)
    }
    window.location.href = '/';
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h3>Create a Note</h3>

          {/* SELECT USER  */}
          <div className="form-group">
            <select 
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
              value={this.state.userSelected}>
              {
                this.state.users.map(user => 
                <option 
                key={user._id}
                value={user.username}>
                  {user.username}
                </option>)
              }
            </select>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              name="title"
              placeholder="Title"
              onChange={this.onInputChange}
              value={this.state.title}
              required/>
          </div>

          <div className="form-group">
            <textarea 
              name="content"
              className="form-control"
              placeholder="Content"
              onChange={this.onInputChange}
              value={this.state.content}
              required></textarea>
          </div>

          <form onSubmit={this.onSubmit}>
            <button className="btn btn-primary">
              Create a Note
            </button>
          </form>
        </div>
      </div>
    )
  }
}
