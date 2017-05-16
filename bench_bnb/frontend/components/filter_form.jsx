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

    this.props.changeFilter(name, value);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Minimum Seating:
            <input
              type="number"
              name="minSeating"
              value={this.state.minSeating}
              onChange={this.update}
            />
          </label>

          <label>
            Maximum Seating:
            <input
              type="number"
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
