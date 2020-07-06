import React from "react";


class Detail extends React.Component{
   componentDidMount(){
      const { history, location } = this.props;
      if(location.state === undefined){
         // redirect: back to home. history사용
         history.push("/");
      }
      console.log(location.state);
   }
   render(){
      const {location} = this.props;
      if(location.state){
         return <span>{location.state.title}</span>
      }else{
         return null;
      }
   }
}

export default Detail;