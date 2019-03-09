import React from 'react'
import './CSS/Previewer.css'

const myMarked = require('marked');

class Previewer extends React.Component{
    constructor() {
        super()
        this.state = {
            previewText: 
                'Here are some Examples of markdown to type: \n\n' +
                '# Here is an H1 element\n\n' +
                '## Here is an H2 subheader element\n\n' +
                '[Google](https://www.google.com) Here is a link \n\n' +
                '`Here is some in line code`\n\n' + 
                '    { "Name": code block }\n\n' +
                '- Here\n- Is\n- A\n- List \n\n' +
                '>Here is a block quote\n' + 
                '>Here is the second line of the block quote.\n\n' +
                '![An image](../../../logo.svg) \n\n' +
                '**Here is some bold text**'
        }

        myMarked.setOptions({
            renderer: new myMarked.Renderer(),
            gfm: true,
            breaks: true
        })

        this.textChanged = this.textChanged.bind(this)
    }

    textChanged = (event) =>
        this.setState({
            previewText: event.target.value
        })

    render = () =>
         (
            <div className="Previewer">
                <div>
                    <form>
                        <textarea id="editor" defaultValue = {this.state.previewText} onChange={this.textChanged} />
                    </form>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{__html: myMarked(this.state.previewText)}} />
            </div>
        )
}

export default Previewer;