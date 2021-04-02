import * as hello from '../helloo.js';
import {data} from '../data/data.js';

const navbar = () => {
  return`
    <nav>
      <span class="nav-menu"><!--soon--></span>
      <span class="title">${data.kelas}</span>
      <span class="dot"></span>
    </nav>`
};
hello.style`
  nav {
    width: 100%;
    height: 64px;
    background-color: #fafafa;
    border-bottom: 1px solid #e6e6e6;
    position: fixed;
    top: 0;
    z-index: 1;
    display: grid;
    grid-template-columns: 64px 1fr 64px;
    align-items: center;
  } ---
  nav .title {
    font-size: 18px;
    font-weight: 500;
  } ---
  nav .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4f65ea;
    margin: auto
  } ---`

export { navbar };