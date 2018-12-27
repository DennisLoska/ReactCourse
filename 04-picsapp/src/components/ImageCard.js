import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.onload = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10 + 1);
      this.setState({ spans });
    };
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <img
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
        className="image"
        style={{
          gridRowEnd: `span ${this.state.spans}`
        }}
      />
    );
  }
}

export default ImageCard;
