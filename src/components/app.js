// import React, { Component } from 'react'
// // import './App.css'

// class App extends Component {
//   constructor(props)  {
//     super(props)
//     this.state = { 
//       posts: []
//     }  
//   }
  

//  componentDidMount() {
//    let url = "http://localhost:3001/posts"
//    fetch(url)
//    .then(resp => resp.json())
//    .then(data => {
//      let posts = data.map((post, index) => {
//        return(
//          <div key={index}>
//            <h3>{post.title}</h3>
//            <p>Tags: {post.tags} </p>
//          </div>
//        )
//      })
//      this.setState({posts: posts})
//    })
//  }

//  render(){
//    return (
//      <div className="App">
//        {this.state.posts}
//      </div>
//    )
//  }

// }
//  export default App













import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layout'
import Home from '../pages/home'
import Badges from '../pages/badges'
import BadgeNew from '../pages/badgeNew'
import BadgeDetails from '../pages/badgeDetailsContainer';
import BadgeEdit from '../pages/badgeEdit'
import NotFound from '../pages/notFound'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badge/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;


