import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onYoutubeSubmit(this.state.term);
  };

  render() {
    return (
      // draws rectangle around content
      <div className="search-bar ui segment" style={{ marginTop: "37px" }}>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
