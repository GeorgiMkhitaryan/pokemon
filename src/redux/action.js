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

export function itemsFetchDataSuccess(pokemons) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        pokemons
    };
}

export function offsetChange(offset) {
    const url = `https://pokeapi.co/api/v2/ability/?limit=40&offset=${offset}`
    return dispatch => {
        dispatch({
            type: 'OFFSET_CHANGE',
            offset
        })
        dispatch(itemsFetchData(url))
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}