import * as ActionTypes from './ActionTypes';
import { Comments } from './comments';

export const addComment = (dishId, rating, author, Comment) => (
    {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            Comment: Comments
        }
    }
)