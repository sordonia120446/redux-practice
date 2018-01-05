import React, {Component} from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";

import ItemList from "../components/ItemList";


class ItemListInfo extends Component {

  componentDidMount() {
    const url = 'http://5826ed963900d612000138bd.mockapi.io/items';
    this.props.fetchData(url);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry, you suck at life</p>;
    }

    return (
      <div>
        {
          (this.props.isLoading)
          ? <p>Loading...</p>
          : <ItemList items={this.props.items} />
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListInfo);
