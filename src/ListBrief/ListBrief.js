import React from 'react';
import './style.css';

class ListBrief extends React.Component {

constructor(){
    super();
    this.state={
      data:[]
    }
  }
  
componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json').then((Response)=>Response.json()).then((findresponse)=>
    {
      console.log(findresponse.movies)
      this.setState({
        data:findresponse.movies,
      })
    })
  }
    render() {
  
      return (
        <div>
          <h2> I Get Data From "facebook.github.io/react-native/movies.json" </h2>
          { 
            this.state.data.map((dynamicData,key) =>
            <div class="center-div">
            <h4> {dynamicData.title}  : </h4>  
              <h5>{dynamicData.releaseYear}</h5> 
            </div>
            )
          }
        </div>
      );
    }
  }
  
  export default ListBrief;  