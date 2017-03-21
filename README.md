# react-simple-contenteditable
A simple contenteditable component

## Why?
ContentEditable has some known issues, the purpose of this component is to avoid some of its problems:

* Enable "plaintext-only" for more browsers;
* Prevent cursor jumping to the beginning of the field;

## Example
```html

render () {
  return (
    <ContentEditable
      html={this.state.myField}
      className="my-class"
      onChange={ this._handleChange }
      contentEditable="plaintext-only"
      placeholder="Add title"
    />
  )
}
```
