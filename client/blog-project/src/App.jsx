import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPostList.jsx';
import BlogPostForm from './components/BlogPostForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BlogPostList} />
        <Route path="/post/:id" component={BlogPost} />
        <Route path="/create" component={BlogPostForm} />
        <Route path="/edit/:id" component={BlogPostForm} />
      </Switch>
    </Router>
  );
}

export default App;
