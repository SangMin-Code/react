import { Component } from 'react';
import './app.css';
import VideoList from './components/VideoList';

class App extends Component {

	state = {
        videos: []
    }

	componentDidMount(){
		fetch('')
		.then((response) => response.json())
		.then(data => {
			this.setState({ videos: data.items });
		});
	}

	render(){
		return (
			<>
				<VideoList 
					videos ={this.state.videos}/>
			</>
		);
	}
}

export default App;
