class Projects extends React.Component {
  render () {
    var createProjectItem = (project, index) => <Project key={index} project={project} />;
    return ( 
      <div className="col-lg-10">{this.props.projects.map(createProjectItem)}</div>
      );
  }
}

