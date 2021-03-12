import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
                profilePic="https://static.wikia.nocookie.net/thejusticeworld/images/6/63/Luffy.jpg/revision/latest/scale-to-width-down/340?cb=20110416204724"
                message="Lets Plant Some Trees."
                timestamp="timestamp"
                username="Monkey D. Luffy"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BFEq2LFWdqpxAYhW2EDJ-qviKAuPRJWfVA&usqp=CAU"/>

            {/* storyreel
            messengeSender
             */}
        </div>
    )   
}

export default Feed
