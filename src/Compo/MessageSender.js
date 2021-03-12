import React, {useState}from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';



    function MessageSender() { 

        const [input, setInput] = useState("")
        const [imageUrl, setImageUrl] = useState("")





    const handleSubmit=(e)=>{
        e.preventDefault();

        //some database stuff

        setInput("");
        setImageUrl('');
    };

    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar/>
                <form>
                    <input value={input} 
                           onChange={(e)=> setInput(e.target.value)} className="messagesender__input"  placeholder={"Thinking about Trees??"}/>
                    <input value={imageUrl}
                           onChange={(e)=>setImageUrl(e.target.value)} placeholder={"image URL(optional)"} />
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>


            </div>
            <div className="messagesender__bottom">
                <div className="messagesender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>

                </div>
                <div className="messagesender__option">
                    <InsertPhotoIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>

                </div>
                <div className="messagesender__option">
                    <EmojiEmotionsIcon style={{color:"yellow"}}/>
                    <h3>Feeling/Activity</h3>

                </div>



            </div>
            
        </div>
    )
}

export default MessageSender
