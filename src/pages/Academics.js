import React from 'react'
import "./Academics.css"
import Layout from "../components/layout";
import ArticleBox from "../components/Articlebox";
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'gatsby'

function Academics() {
    return (
        <Layout>
            <div className="academics">
            <div className="breakBar"></div>
            <div className="academics__banner">
                ACADEMICS
            </div>
            <div className="section__text">
                <h1>featured articles:</h1>
            </div>
            <div className="featured__boxes">
                <ArticleBox topic="Academics" title="placeholder" passColor="#F68F2F" linkref="/Academics/"/>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
                <div className="featured__boxes__arrow">
                    <IconButton aria-label="next">
                        <ArrowForwardIosIcon style={{ color: "white" }}/>
                    </IconButton>
                </div>
           </div>
           <div className="section__text">
                <h1>studying and classwork:</h1>
            </div>
            <div className="featured__boxes">
                <ArticleBox topic="Academics" title="placeholder" passColor="#F68F2F" linkref="/Academics/"/>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
                <div className="featured__boxes__arrow">
                    <IconButton aria-label="next">
                        <ArrowForwardIosIcon style={{ color: "white" }}/>
                    </IconButton>
                </div>
           </div>
            <div className="section__text">
                <h1>featured articles:</h1>
            </div>
            <div className="featured__boxes">
                <ArticleBox topic="Academics" title="placeholder" passColor="#F68F2F" linkref="/Academics/"/>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
                <div className="featured__boxes__arrow">
                    <IconButton aria-label="next">
                        <ArrowForwardIosIcon style={{ color: "white" }}/>
                    </IconButton>
                </div>
           </div>
           <div className="section__text">
                <h1>studying and classwork:</h1>
            </div>
            <div className="featured__boxes">
                <ArticleBox topic="Academics" title="placeholder" passColor="#F68F2F" linkref="/Academics/"/>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
                <div className="featured__boxes__arrow">
                    <IconButton aria-label="next">
                        <ArrowForwardIosIcon style={{ color: "white" }}/>
                    </IconButton>
                </div>
           </div>
            <div className="section__cant">
                <Link to="/Forums/" style={{ color: "white" }}>
                    <u>can't find what you're looking for?</u>
                </Link>
            </div>
            </div>
       </Layout>
    )
}

export default Academics
