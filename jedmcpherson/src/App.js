import {Component} from 'react'

import LinkTreeTitles from './components/linktree-clone/titles/titles.component';
import LinkList from './components/linktree-clone/link-list/link-list.component';
import LinkTreeImg from './components/linktree-clone/linktree-imgs/linktree-imgs.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';


const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const website = <FontAwesomeIcon icon={faLink} />

class App extends Component{
  constructor(){
    super();
    this.state = {
         links:[
        // {
        //   title: 'Website',
        //   id:'sadg465',
        //   ariaLabel: 'links to jedmcpherson.com',
        //   href:'http://www.jedmcpherson.com/',

        // },
        {
          title: 'Twitter',
          id:'asfh448',
          ariaLabel: "links to Jed McPherson's Twitter page",
          href:'http://www.twitter.com/jedmcpherson',
        },
          {
          title: 'Webstore',
          id:'lkug578',
          ariaLabel: "links to Jed McPherson's gumroad page",
          href:'https://jedmcpherson.gumroad.com/',
        },
        {
          title: 'Sign up to my newsletter',
          id:'dsag5348',
          ariaLabel: "sign up to jed mcpherson's newsletter",
          href:'https://jedmcpherson.us14.list-manage.com/subscribe?u=d6f9e2392b3b238478f996be8&id=5218c4c5b8',
        },
        {
          title: 'Send me an email',
          id:'haag9735',
          ariaLabel: "links to Jed McPherson's Twitter page",
          href:'mailto:jedmcpherson1@gmail.co.uk',
        },
        {
          title: 'Instagram',
          id:'tqfv5397',
          ariaLabel: "links to Jed McPherson's Instagram page",
          href:'http://www.instagram.com/jedmcpherson1',
        },     
    
      ],
      footerLinks:[     {
          title: website,
          id:'asdfg',
          ariaLabel: 'links to jedmcpherson.com',
          href:'http://www.jedmcpherson.com/',

        },
        {
          title: instagram,
          id:'asfh448',
          ariaLabel: "links to Jed McPherson's Twitter page",
          href:'http://www.twitter.com/jedmcpherson',
        },
        {
          title: twitter,
          id:'mhfg2387',
          ariaLabel: "links to Jed McPherson's instagram page",
          href:'http://www.twitter.com/jedmcpherson',
        },
      ],
      };
    }
    
  
  render(){
    
      return (
        <div className="App">
          <section id='linktree'>
            <div className='flex-container col'>

            <LinkTreeTitles title={"Jed McPherson"} subheading={"jedmcpherson1@gmail.com"}/> 
            <LinkTreeImg img={this.state.headerImg}/>
            <LinkList links={this.state.links} className="col btn-container flex-container"/>
            <LinkList links={this.state.footerLinks} className="row flex-container footer"></LinkList>
            </div>
          </section>
        </div>
      );
  

}

}

export default App;
