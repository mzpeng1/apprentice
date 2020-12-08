import "./Featured.css";
import React, { useState } from 'react'
import ArticleBox from "./Articlebox";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

var db = [
        { topic: "academics", title: "placeholder 0", color: "#F68F2F", link: "/Academics/"},
        { topic: "living", title: "placeholder 1", color: "#696969", link: "/Academics/"},
        { topic: "finance", title: "placeholder 2", color: "#943bf2", link: "/Academics/"},
        { topic: "health", title: "placeholder 3", color: "#f743cc", link: "/Academics/"},
        { topic: "academics", title: "placeholder 4", color: "#F68F2F", link: "/Academics/"},
        { topic: "living", title: "placeholder 5", color: "#696969", link: "/Academics/"},
    ]



function Featured() {
    const [data, updateData] = useState(db);

    const scroll = () => {
        var currData = data;
        for (var i = 0; i < 4; i++) {
            currData[i] = currData[i+1];
        }
        updateData(currData);
    }

    return (
        <div className="featured">
            <div className="featured__text">
                <h1>featured articles:</h1>
            </div>
            <div className="featured__boxes">
                <ArticleBox topic={data[0].topic} title={data[0].title} passColor={data[0].color} linkref={data[0].link}/>
                <ArticleBox topic={data[1].topic} title={data[1].title} passColor={data[1].color} linkref={data[1].link}/>
                <ArticleBox topic={data[2].topic} title={data[2].title} passColor={data[2].color} linkref={data[2].link}/>
                <ArticleBox topic={data[3].topic} title={data[3].title} passColor={data[3].color} linkref={data[3].link}/>
                <div className="featured__boxes__arrow">
                    <IconButton aria-label="next" onClick={scroll}>
                        <ArrowForwardIosIcon style={{ color: "white" }} />
                    </IconButton>
                </div>
           </div>
           <div className="featured__link">
               <h4><u>can't find what you're looking for?</u></h4>
           </div>
        </div>
    )
}

export default Featured
