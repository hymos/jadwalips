import * as hello from './helloo.js';

import * as event from './components/events.js';
import {navbar} from './components/navbar.js';
import {main} from './components/main-page.js';


const app = () => {
  return`
    <div class="app">
      ${ navbar() }
      ${ main() }
    </div>`
};
hello.font`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`
hello.styleVar('vh', window.innerHeight + 'px')
hello.style`
  div.app {
    font-family: 'DM Sans', sans-serif;
    color: #666;
    text-align: center;
    background-color: #fafafa;
    height: calc(var(--vh) - 1px);
    overflow: scroll;
  } ---
  div.app::-webkit-scrollbar {
    display: none;
  } ---`


//play!
hello.normalizeCss();
hello.render(app(),'div#app');