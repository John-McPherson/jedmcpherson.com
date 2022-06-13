import { Component } from "react";

class LinkTreeTitles extends Component{

    render(){
        const titles  = this.props;
        // console.log( test)
     
        return (
            <div className="linktree-titles">
                <div>
                <h1>{titles.title}</h1>
                <h3>{titles.subheading}</h3>
                </div>
                <h2>{titles.subtitle}</h2>
            </div>
        );
    }
}

export default LinkTreeTitles