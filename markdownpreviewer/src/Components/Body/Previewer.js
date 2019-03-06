import React from 'react'
import marked from 'marked'

class Previewer extends React.Component{
    constructor() {
        super()
        this.state = {
            previewText: 
                'Here are some Examples of markdown to type: \n\n' +
                '# Here is an H1 element \n' +
                '## Here is an H2 subheader element \n' +
                '[Google](https://www.google.com) Here is a link \n' +
                '`Here is some in line code` \n' + 
                '``` { "Name": code block } ``` \n' +
                ' -Here -Is -A -List \n' +
                '> Here is a block quote \n' +
                '![An image](../../../logo.svg) \n' +
                '**Here is some bold text**'
        }

        this.textChanged = this.textChanged.bind(this)
    }

    textChanged = (event) =>
        this.setState({
            previewText: event.target.value
        })

    render = () =>
        <div id="Previewer">
            <textarea 
                id="editor"
                defaultValue = {this.state.previewText}  
                onChange = { this.textChanged }/>
            <div id="preview"
                contentEditable = {false}>
                { marked(this.state.previewText) }
            </div>
        </div>
}

export default Previewer;