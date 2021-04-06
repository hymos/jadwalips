import * as hello from '../helloo.js';
import {data} from '../data/data.js';

const navbar = () => {
  return`
    <nav>
      <span class="nav-menu"><!--soon--></span>
      <span class="title">${data.kelas}</span>
      <span class="dot" onclick="toggleDark()"></span>
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
  nav.dark{
    border-bottom-color: #333333;
  } ---
  nav .title {
    font-size: 18px;
    font-weight: 500;
  } ---
  nav .dot {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(79, 102, 234,.06);
    display: flex;
    margin: auto;
  } ---
  nav .dot:hover {
    cursor: pointer;
  } ---
  nav.dark .dot {
    background-color: rgba(255,255,255,.1);
  } ---
  nav .dot img {
    margin: auto;
  } ---
  `

export { navbar };