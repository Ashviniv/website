class ProjectsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { projects: [] };
    this.fetchProjects();
  }
  
  fetchProjects(){
    $.getJSON(intranet_url +"/api/v1/portfolio", (data) => {
      this.setState({projects: data});
    }); 
  }
  render () {
    return (
        <div className="container">      
          <div className="row"> 
            <ProjectsList projects={this.state.projects} />  
            <Projects projects={this.state.projects} />;
          </div>
        </div>
    );
  }
}

