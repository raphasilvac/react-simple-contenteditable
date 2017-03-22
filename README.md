# react-simple-contenteditable
A simple contenteditable component

## Why?
ContentEditable has some known issues, the purpose of this component is to avoid some of its problems:

* Enable "plaintext-only" for most browsers;
* Prevent cursor jumping to the beginning of the field;

## Example
```jsx
import React, { Component } from 'react';
import ContentEditable from 'react-simple-contenteditable';

class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      title: "Title here"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (ev, value) {
    this.setState({
      title: value
    })
  }

  render() {
    return (
      <div className="App">
        <ContentEditable
          html={this.state.title}
          className="my-class"
          onChange={ this.handleChange }
          contentEditable="plaintext-only"
        />
      </div>
    );
  }
}

```
