import {Component} from 'react'

import LinkList from './components/linktree-clone/link-list/link-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      links:[
        {
          title: 'Website',
          id:'sadg465',
          ariaLabel: 'links to jedmcpherson.com',
          href:'http://www.jedmcpherson.com/',

        },
        {
          title: 'Twitter',
          id:'asfh448',
          ariaLabel: "links to Jed McPherson's Twitter page",
          href:'http://www.twitter.com/jedmcpherson',
        },
      ]
      };
    }
    
  
  render(){
    
      return (
        <div className="App">
            <LinkList links={this.state.links}/>
        </div>
      );
  

}

}

export default App;
