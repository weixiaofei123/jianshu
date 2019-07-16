import { combineReducers } from 'redux'
import HeaderReducer from '../../component/Header/store/reducer.js'
import RecommendReducer from '../../component/Recommend/Store/reducer.js'
import ViewReducer from '../../component/View/Store/reducer.js'
import DetailReducer from '../detail/store/reducer.js'
import LoginReducer from '../login/store/reducer.js'
import TagReducer from '../../component/Tag/store/reducer.js'
import RegisterReducer from '../register/store/reducer.js'
import RecommendationReducer from '../recommendation/store/reducer.js'
import AuthorReducer from '../author/store/reducer.js'
import ReadMoreReducer from '../../component/readMore/store/reducer.js'


export default combineReducers({
	Header:HeaderReducer,
	Recommend:RecommendReducer,
	View:ViewReducer,
	Detail:DetailReducer,
	Login:LoginReducer,
	Tag:TagReducer,
	Register:RegisterReducer,
	Recommendation:RecommendationReducer,
	Author:AuthorReducer,
	ReadMore:ReadMoreReducer
})