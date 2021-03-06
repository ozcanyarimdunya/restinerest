import React from "react"
import API from "../utils/Const";
import ListItem from "./ListItem";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: [],}
    }

    componentDidMount() {
        fetch(API.POSTS, {})
            .then(data => data.json())
            .then(posts => this.setState({posts}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ul>
                {
                    this.state.posts.map((post, index) => <ListItem key={index} text={post.title}/>)
                }
            </ul>
        )
    }
}

export default PostList;