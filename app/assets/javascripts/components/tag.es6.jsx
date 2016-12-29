class Tag extends React.Component {
  render () {
      if(this.props.tag == "filter.js"){
        return (
           <li>
             <a href='http://github.com/jiren/filter.js'>{ this.props.tag } </a>
           </li>
        );
      }
      else if(this.props.tag == "StreamTable.js"){
        return(
          <li>
           <a href='https://github.com/jiren/StreamTable.js'>{ this.props.tag } </a>
         </li>
        );
      }
      else{
        return <li>{this.props.tag}</li>;
      }
  }
}

