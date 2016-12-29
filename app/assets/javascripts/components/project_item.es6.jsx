class ProjectItem extends React.Component {
  render () {
    return(
      <li>
        <a href={"#"+ this.props.project.name}>{this.props.project.name}</a>
     </li>
    );
  }
}

