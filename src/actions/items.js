export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(itemsHasErrored(true));
    }, 5000);
  }
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((items) => {
        dispatch(itemsFetchDataSuccess(items));
        dispatch(itemsIsLoading(false));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
