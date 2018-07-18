import React from 'react'

export default class Project extends React.Component {

  constructor(props)
   {
     super(props);
     this.state = { id: '', name : ''};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(event) {
     this.setState({[event.target.name]: event.target.value})
   }


   handleSubmit(event){
     event.preventDefault();
   }
   componentDidMount() {
    fetch('/projects', {
      method: 'POST',
      body: {
      id:12,
      name:'hlle'
      }
    })
    .then(res => res.json())
    .then(json => {console.log("new project added")})
      }

   render() {
     return (
       <div className="App">
         <header className="App-header">
           <h1 className="App-title">Welcome to React</h1>
         </header>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
         <form method="post" onSubmit={this.handleSubmit}>
           <input type="text" placeholder="id" name="id" value={this.state.value} onChange={this.handleChange} required />
           <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} required />
           <input type="Submit" name="Submit" value="Submit" />
         </form>
       </div>
     );
   }
}