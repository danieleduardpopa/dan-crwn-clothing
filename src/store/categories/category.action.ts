import {
    createAction, 
    Action, 
    ActionWithPayload
} from '../../utils/reducer/reducer.utils';
import { 
    CATEGORIES_ACTION_TYPES, 
    Category, 
} from './category.types';

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
    Category[]    
>;

export type FetchCategoriesFailed = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED,
    Error
>;

export type CategoryAction = FetchCategoriesStart 
    | FetchCategoriesSuccess
    | FetchCategoriesFailed;

export const fetchCategoriesStart = (): FetchCategoriesStart => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START
);

export const fetchCategoriesSuccess = 
    (categoriesArray: Category[]): FetchCategoriesSuccess => 
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed => 
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED,
        error
    );

