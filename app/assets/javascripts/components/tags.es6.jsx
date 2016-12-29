class Tags extends React.Component {
  render () {
    var getTag = (tag, index) => <Tag key={index} tag={tag} />;
    return <span> {this.props.tags.map(getTag)} </span>;
  }
}

