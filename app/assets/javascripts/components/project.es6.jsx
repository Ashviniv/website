class Project extends React.Component {
  render () {
    return ( 
      <div className="blog-item" id={this.props.project.name}>
        <div className="row">
          <div className="col-lg-10 col-sm-10">
            <h1>
              <a target="_blank" href={this.props.project.url}>{this.props.project.name}</a>
            </h1>
          </div>
          <div className="col-lg-7">
            <div className="blog-img well">
              <a href={this.props.project.url} target="_blank">
                <img alt={"Screenshot of " + this.props.project.name } src={ intranet_url + this.props.project.image_url}></img>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="blog-side-item">
              <strong className="tags">
                <ul className="list-unstyled tagg">
                  <Tags tags={this.props.project.tags} />
                </ul>
                <ul className="list-unstyled tagg">
                  <li>
                    <a target="_blank" href={intranet_url + this.props.project.case_study_url}>Case study</a>
                  </li>
                </ul>
              </strong>
            </div>
          </div>
        </div>
        <ProjectDescription description={this.props.project.description} />
      </div>
    );
  }
}

