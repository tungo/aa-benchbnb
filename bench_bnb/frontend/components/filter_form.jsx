import React from "react";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minSeating: this.props.minSeating,
      maxSeating: this.props.maxSeating
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();

    const { name, value } = e.currentTarget;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Minimum Seating:
            <input
              type="text"
              name="minSeating"
              value={this.state.minSeating}
              onChange={this.update}
            />
          </label>

          <label>
            Maximum Seating:
            <input
              type="text"
              name="maxSeating"
              value={this.state.maxSeating}
              onChange={this.update}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default FilterForm;
