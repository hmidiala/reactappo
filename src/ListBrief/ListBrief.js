import React from 'react';

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
        <div Class="container">
          <h2> ListBrief : Get Data From "facebook.github.io/react-native/movies.json" </h2>
          { 
            this.state.data.map((dynamicData,key) =>
            <table>
             <td>  {dynamicData.title}  : </td>
             <td>  {dynamicData.releaseYear} </td>
            </table>
            )
          }
        </div>
      );
    }
  }
  
  export default ListBrief;  