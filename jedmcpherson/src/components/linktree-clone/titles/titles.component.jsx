import { Component } from "react";

class LinkTreeTitles extends Component{

    render(){
        const titles  = this.props;
    
        return (
            <div className="linktree-titles">
                <div>
                <h1>{titles.title}</h1>
                <h3>{titles.subheading}</h3>
                </div>
                </div>
        );
    }
}

export default LinkTreeTitles