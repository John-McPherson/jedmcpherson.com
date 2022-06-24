import { Component } from "react";

class LinkTreeImg extends Component{
    state = {
        headerImg:"img1",
  
    }

    render(){


        return (
            <div className="linktree-img-container">
                <div className={"linktree-img "  + this.state.headerImg}></div>
                <div className="profile-pic"></div>
                <div className="subheading">
                <h3>comic writer</h3>
                </div>
                
            </div>
        );
    }
}

export default LinkTreeImg