import React from 'react';
import "./JoinForum.css";

function JoinForum() {
    return (
        <div className="joinForum">
            <div className="joinForum__text">
                <h1>join the forums!</h1>
                
            </div>
            <div className="joinForum__boxes">
                <div className="joinForum__boxes__left">
                    <h3>browse common problems:</h3>
                    <div className="joinForum__boxes__common">
                        <ul>
                            <li>What vaccinations are required for my college?</li>
                            <li>Anyone have advice for vegans in the dining hall?</li>
                            <li>How do you take notes more efficiently?</li>
                            <li>How much is tuition next year?</li>
                            <li>What is an average GPA for my major?</li>
                            <li>I failed a class... what do i do now?</li>
                            <li>Can I bring my pet to live with me?</li>
                        </ul>
                    </div>
                    <h4>If you're struggling, you're probably not <br></br>alone. Check out other college student <br></br>advice and experiences in the forums!</h4>
                </div>
                <div className="joinForum__boxes__right">
                    <div className="joinForum__boxes__right__top">
                        <div className="joinForum__boxes__what">
                            <h3>what is a forum?</h3>
                            <h4>forums are online</h4>
                            <h4>discussion boards for</h4>
                            <h4>students to share</h4>
                            <h4>questions & experiences!</h4>
                        </div>
                        <div className="joinForum__boxes__find">
                            <h3>Find a Forum</h3>
                        </div>
                    </div>
                    <div className="joinForum__boxes__right__bot">
                        <h3>have your own questions?</h3>
                        <h4>If you want to ask your own questions</h4>
                        <h4>or join our college community,</h4>
                        <h4>become a member today!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinForum
