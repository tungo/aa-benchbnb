import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      seating: '',
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();

    const { name, value } = e.currentTarget;
    this.setState({[name]: value});
  }

  handleClick(e) {
    e.preventDefault();


  }

  render() {
    return (
      <div>
        <form>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.update}
            />
          </label>

          <label>
            Number of seats:
            <input
              type="text"
              name="seating"
              value={this.state.seating}
              onChange={this.update}
            />
          </label>

          <label>
            Latitude:
            <input
              type="text"
              name="lat"
              value={this.state.lat}
              onChange={this.update}
              disabled
            />
          </label>

          <label>
            Longtitute:
            <input
              type="text"
              name="lng"
              value={this.state.lng}
              onChange={this.update}
              disabled
            />
          </label>

          <button onClick={this.handleClick}>Submit</button>

        </form>
      </div>
    );
  }
}

export default BenchForm;
