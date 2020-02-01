import React, { Component } from 'react';
import { firebase, firebaseLooper } from '../../../firebase';
import FileUploader from 'react-firebase-file-uploader';

class Uploader extends Component{

    state = {
        name:'',
        isUploading:false,
        progress:0,
        fileURL:''
    }

    handleUploadStart = () =>{
        this.setState({
            isUploading: true,
            progress: 0
        })
    }

    handleUploadError = (error) => {
        this.setState({
            isUploading:false
            
        })
        console.log(error)
    }

    handleProgress = (progress) =>{
        this.setState({
            progress
        })
    }

    handleUploadSuccess = (filename) => {
        this.setState({
            name: filename,
            progress:100,
            isUploading:false
        })
        firebase.storage().ref('image')
        .child(filename).getDownloadURL()
        .then( url => {
            this.setState({
                fileURL:url
            })
        })

        this.props.filename(filename)
    }



    render(){
        return(
            <div>
                <FileUploader
                    accept="image/*"//Add whatever types of image
                    name="image"
                    randomizeFilename//Store this name to firebase
                    //Create a directory to store image in firebase
                    storageRef={firebase.storage().ref('image')}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
                { this.state.isUploading ? 
                    <p>Progress:{this.state.progress}</p>
                    : null
                }
                {
                    this.state.fileURL ?
                    <img style={{
                        width:'700px'
                    }}src={this.state.fileURL}/>
                    :null
                }

            </div>
        )
    }
}

export default Uploader;