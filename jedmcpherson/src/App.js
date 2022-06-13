import {Component} from 'react'

import LinkTreeTitles from './components/linktree-clone/titles/titles.component';
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
      ],
      footerLinks:[     {
          title: 'Test',
          id:'asdfg',
          ariaLabel: 'links to jedmcpherson.com',
          href:'http://www.jedmcpherson.com/',

        },]
      };
    }
    
  
  render(){
    
      return (
        <div className="App">
            <LinkTreeTitles title={"Jed McPherson"} subtitle={"comics writer"} subheading={"jedmcpherson1@gmail.com"}/> 
            <LinkList links={this.state.links} className="col"/>
            <LinkList links={this.state.footerLinks} className="row"></LinkList>
        </div>
      );
  

}

}

export default App;
