import React, {Component} from 'react';


class Youtube extends Component {
    render(){
      return(
        <div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/fASV9M32u3k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
      );
    }
}

export default Youtube;
