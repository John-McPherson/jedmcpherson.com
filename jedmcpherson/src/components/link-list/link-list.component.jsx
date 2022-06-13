import { Component } from "react";

class LinkList extends Component{

    render(){
        const { links } = this.props
    
        return (
            <div>
                {links.map(link =>(
                    <div className="link" key={link.id}>
                        <a
                            className="App-link"
                            href={link.href}
                            aria-label={link.ariaLabel}
                            target="_blank"
                            rel="noopener noreferrer">
                            {link.title}     
                        </a>  
                    </div>
                ))}
            </div>
        );
    }
}

export default LinkList