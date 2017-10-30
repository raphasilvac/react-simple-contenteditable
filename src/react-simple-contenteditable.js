import React, { Component } from 'react';

export default class ContentEditable extends Component {
  constructor (props) {
    super(props);
    this._onChange  = this._onChange.bind(this);
    this._onPaste   = this._onPaste.bind(this);
  }

  _onChange (ev) {
    const method  = this.getInnerMethod();
    const value   = this.refs.element[method];

    this.props.onChange(ev, value);
  }

  _onPaste(ev) {
    const { onPaste, contentEditable } = this.props;

    if (contentEditable === 'plaintext-only') {
      ev.preventDefault();
      var text = ev.clipboardData.getData("text");
      document.execCommand('insertText', false, text);
    }

    if (onPaste) {
      onPaste(ev);
    }
  }

  getInnerMethod () {
    return this.props.contentEditable === 'plaintext-only' ? 'innerText' : 'innerHTML';
  }

  shouldComponentUpdate(nextProps, nextState) {
    const method = this.getInnerMethod();
    return nextProps.html !== this.elem[method];
  }

  render () {
    const { tagName, html, contentEditable, ...props } = this.props;

    const Element = tagName || "div";

    return (
      <Element
        {...props}
        ref={(elem) => { this.elem = elem }}
        dangerouslySetInnerHTML={{ __html: html }}
        contentEditable={ contentEditable === 'false' ? false : true }
        onInput={ this._onChange }
        onPaste={ this._onPaste }
      />
    )
  }
}
