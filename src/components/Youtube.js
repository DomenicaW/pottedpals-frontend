import React, {Component} from 'react';

const API = 'AIzaSyCEXxjr-ZNVAWdnx0AKpUia1qoPxweqSPA';
const channelId = 'UC9afZE1IVR6JhOjKXiEddIA';
const result = 3

//string interpolation from video object
let musicURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId${channelId}&key=${API}&maxResults=${result}`

class Youtube extends Component {

    constructor(props){
      super(props);

      this.state = {
        ytmusic: []
      };
      this.clicked = this.clicked.bind(this);
    }
    clicked(){
      // console.log('button was clicked');
      fetch(musicURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
      const ytmusic = responseJson.items.map(obj =>"https://www.youtube.com/embed/"+ obj.id.videoId);
      this.setState({ytmusic});
      // console.log(this.state.ytmusic)
      })
    }

    render(){
      // console.log(musicURL)
      // console.log(this.state.ytmusic)
      return(
        <div>
        <button onClick={this.clicked}>Click for Calm</button>
        {
          this.state.musicURL.map((link, i) => {
            console.log(link);
            let video = <div key={i} className ='youtube'><iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            return video;
          })
        }
          {this.video}
        </div>
      );
    }
}

// export default Youtube;
