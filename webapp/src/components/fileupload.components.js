import React from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Form, Header, Segment, Divider} from 'semantic-ui-react'
import FlexView from 'react-flexview'
import { notify } from 'reapop'
import {uploadDocumentRequest} from '../actions/example.actions'

const fileUpload = (props) => {
  const { notify, uploadDocumentRequest } = (props)
  //
  const fileToUpload = (event) => {
    var files = event.target.files
    for (var i = 0; i < files.length; i++) {
      console.log(files[i].name);
      console.log(files[i])
        console.log("Uploading File")
        notify({
          title: 'Upload',
          message: 'Your File is being processed',
          status: 'info',
          dismissible: true,
          dismissAfter: 3000
        })
      const fileReader = new FileReader()
      fileReader.onload = function(event) { uploadDocumentRequest(fileReader.result) };
      fileReader.readAsText(files[i]);}
    }



  return (
    <FlexView hAlignContent='center' marginTop={30}>
      <Segment color='green'>
        <Form>
          <FlexView hAlignContent='center'>
            <h4> Load CDM Events </h4>
          </FlexView>
        <Divider />
          <FlexView hAlignContent='center'>
            <input type='file' onChange={fileToUpload} multiple/>
          </FlexView>
        </Form>
      </Segment>
    </FlexView>
  )
}

export default withRouter(connect(
  (state) => ({ }),
  { notify, uploadDocumentRequest }
)(fileUpload))
