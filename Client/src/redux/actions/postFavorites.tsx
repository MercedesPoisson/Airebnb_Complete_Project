import { Dispatch } from "redux";
import { POST_FAVORITES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const postFavorites = (id: any, id_property:any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
            const data = await axios.post(`http://localhost:3001/users/${id}/favorites/${id_property}`);
            dispatch({type:POST_FAVORITES})
    }
};

export default postFavorites;

