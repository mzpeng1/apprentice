import React from "react";

import Topics from "../components/Topics";
import Featured from "../components/Featured";
import JoinForum from "../components/JoinForum";
import Layout from "../components/layout";
import './reset.css';
import './index.css';

function App() {
  return (
    <Layout>
      <div className="app__body">
        <Topics />
        <Featured />
        <JoinForum />
      </div>
    </Layout>
 )
}

export default App;
