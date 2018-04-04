import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PageB extends React.Component {
  dict = this.props.value.users;
  arr = [];

  allStudent =(dict)=>{
    var i=0;
    for (var key in dict) {
      var currName = dict[key]["displayName"];
      i = i+1;
    }
    return i;
  }
  listAllStudent(dict,arr){
    var i = 0;
    for (var key in dict) {
      var currName = dict[key]["displayName"];
      arr[i] = currName;
      i = i+1;
    }
    return arr;
  }
  names = this.listAllStudent(this.dict, this.arr)

  render(){
    return (
    <div>
    <h2>Student Page</h2>
      <text>There are {this.allStudent(this.dict)} users</text>      
      <br/>
      <ul>
        {this.names.map(function (listValue){
          return <li>{listValue}</li>
        })}
      </ul>
    </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {value: state.val}
}

const myPageB = connect(
  mapStateToProps,)(PageB)

export default myPageB