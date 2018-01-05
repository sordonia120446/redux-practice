/**
 * To re-iterate, every reducer will return a discrete property of the state,
 * regardless of how many conditions are inside that reducer.
 * 
 * @author Sam O <samuel.ordonia@gmail.com>
 */

 export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = true, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;
    
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    
    default:
      return state;
  }
}
