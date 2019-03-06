import React from 'react'
import Marked from 'marked'

const previewInformation = '';

class Previewer extends React.Component{
    constructor(state) {
        super()
        this.state = state
        this.textChanged = this.textChanged.bind(this)
    }

    textChanged = (text) =>
        this.setState({
            previewText: text 
        })

    render = () =>
        <div id="Previewer">
            <textarea 
                id="editor" 
                defaultValue = {previewInformation} 
                onChange = { this.textChanged('') }/>
            <div id="preview"></div>
        </div>
}

// TODO: test marked import, figure out parameterized state change

export default Previewer;