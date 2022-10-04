import React, {Component} from 'react';

const API = 'AIzaSyCEXxjr-ZNVAWdnx0AKpUia1qoPxweqSPA';
const channelId = 'UC9afZE1IVR6JhOjKXiEddIA';
const result = 3

https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9afZE1IVR6JhOjKXiEddIA&key=AIzaSyCEXxjr-ZNVAWdnx0AKpUia1qoPxweqSPA&maxResults=3

let musicURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId${channelId}&key=${API}&maxResults=${result}`

class Youtube extends Component {
    render(){
      return(
        <div className ='youtube'>
        <button>Click for Calm</button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fASV9M32u3k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
      );
    }
}

export default Youtube;
