import {RECEIVE_TWEETS, ADD_TWEET, TOOGLE_TWEET} from '../actions/tweets'

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_TWEETS:
            return{
                ...state,
                ...action.tweets
            }
        case TOOGLE_TWEET:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked=== true?
                    //unlike tweet 
                    state[action.id].likes.filter((uid)=>uid !== action.authedUser)
                    //like tweet
                    : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET:
            const {tweet} = action
            let replyingTo={}
            if(tweet.replyingTo !== null){
                replyingTo= {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                ...replyingTo,
                [action.tweet.id]: action.tweet,
            }
        
        default:
            return state
    }
}