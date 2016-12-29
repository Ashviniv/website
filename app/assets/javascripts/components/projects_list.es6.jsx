class ProjectsList extends React.Component {
  render () {
    var createItem = (project, index) => <ProjectItem project={project} key={index} />;
    return (
      <div className="col-lg-2">
        <div className="category">
         <div className="blog-side-item">
          <h3>Recent Work</h3>
            <ul className="list-unstyled">
              <span>{this.props.projects.map(createItem)}</span>
            </ul>
         </div>
        </div>
      </div>
    );
  }
}

