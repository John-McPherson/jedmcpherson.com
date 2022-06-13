import { Component } from "react";

class LinkTreeTitles extends Component{

    render(){
        const titles  = this.props;
        // console.log( test)
     
        return (
            <div>
                <h1>{titles.title}</h1>
                <h2>{titles.subtitle}</h2>
                <h3>{titles.subheading}</h3>
            </div>
        );
    }
}

export default LinkTreeTitles