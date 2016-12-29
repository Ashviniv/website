class ProjectDescription extends React.Component {
  render () {
    return (
        <div className="row">
          <div className="col-md-12">
            <br></br>
            <p>{this.props.description}</p>
            <a className="pull-right" href="#">
              <i className="icon-arrow-up" data-placement="top" data-toggle="tooltip" title="" data-original-title="To top"></i>
            </a>
          </div>
        </div>

    );
  }
}

