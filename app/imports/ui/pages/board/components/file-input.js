import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Meteor from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import { render } from 'react-dom';
import './component.css';
import request from 'superagent';
var apiBaseUrl = "http://localhost:3000/images/";
export default class FileInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      files: [
        {id: 1, label: '', name: 'File 1'},
      ],
    }
    this.state={
      filesPreview:[],
      filesToBeSent:[],
      printcount:10,
    }
    this.handleRemoveFile = this.handleRemoveFile.bind(this);
  }
  handleRemoveFile(event) {
    event.preventDefault();
    const files = this.state.files;
    pos = files.map(function(e) { return e.id; }).indexOf(parseInt(event.target.name));
    files.splice(pos, 1);
    this.setState({ files: files });
  }
  onDrop(acceptedFiles, rejectedFiles) {
    var filesToBeSent=this.state.filesToBeSent;
    if(filesToBeSent.length < this.state.printcount){
      filesToBeSent.push(acceptedFiles);
      var filesPreview=[];
      for(var i in filesToBeSent){
        filesPreview.push(<div key={i}>
              {filesToBeSent[i][0].name}
              <MuiThemeProvider>
                <button className="ui mini button"><FontIcon
                    onClick={(event) => this.handleCloseClick(event,i)}
                >X</FontIcon></button>
              </MuiThemeProvider>
            </div>
        );
      }
      this.setState({filesToBeSent,filesPreview});
    }
    else{
      alert("You have reached the limit of printing files at a time")
    }
  }
  handleCloseClick(event,index){
    // console.log("filename",index);
    var filesToBeSent=this.state.filesToBeSent;
    filesToBeSent.splice(index,1);
    // console.log("files",filesToBeSent);
    var filesPreview=[];
    for(var i in filesToBeSent){
      filesPreview.push(<div>
            {filesToBeSent[i][0].name}
            <MuiThemeProvider>
              <button className="ui mini button"><FontIcon
                  onClick={(event) => this.handleCloseClick(event,i)}
              >X</FontIcon></button>
            </MuiThemeProvider>
          </div>
      )
    }
    this.setState({filesToBeSent,filesPreview});
  }
  handleClick(event){
    var self = this;
    if(this.state.filesToBeSent.length>0) {
      var filesArray = this.state.filesToBeSent;
      var req = request.post(apiBaseUrl);
      for(var i in filesArray){
        req.attach(filesArray[i][0].name,filesArray[i][0])
      }
      console.log(req);
      req.end(function(err,res){
        if(err){
          console.log("error ocurred");
        }
        console.log("res",res);
        alert("File printing completed")
      });
    }
    else{
      alert("Please upload some files first");
    }
  }
  render () { return (
      <div>
        <Dropzone onDrop={(files) => this.onDrop(files)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <div>
          Files to be uploaded are:
          {this.state.filesPreview}
        </div>
      </div>);
  }
}
