import * as hello from '../helloo.js';
import {data} from '../data/data.js';


class GetData {
  constructor({hari,jadwal}) {
    this.hari = hari;
    this.tanggal = new Date().getDate();
    this.bulan = new Date().getMonth()+1;
    this.tahun = new Date().getFullYear();
    this.arrMapel = jadwal;
  }
}  
let dataToday;
switch(new Date().getDay()) {
  case 6:dataToday= new GetData(data.sabtu);break;
  case 0:dataToday= new GetData(data.ahad);break;
  case 1:dataToday= new GetData(data.senin);break;
  case 2:dataToday= new GetData(data.selasa);break;
  case 3:dataToday= new GetData(data.rabu);break;
  case 4:dataToday= new GetData(data.kamis);break;
  case 5:dataToday= new GetData(data.jumat);break;
}

const today = () => {
  return`
  <div class="today">
    <h3 class="day">${dataToday.hari}</h3>
    <span class="date">${dataToday.tanggal}-${dataToday.bulan}-${dataToday.tahun}</span>
  </div>`
};
hello.style`
  div.today {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8vh;
  } ---
  div.today .day {
    color: #4f65ea;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    margin: 0;
  } ---
  div.today .date {
    font-size: 12px;
    line-height: 16px;
  } ---`


window.delayUrl = URL => setTimeout( function() {window.open(URL)}, 400);

const schedule = () => {
  return `<div class="schedule">
  ${dataToday.arrMapel.map( ({name,link}) => `
    <a class="mapel" href="javascript:delayUrl('${link}')" onclick="createRipple()">${name}<img src="assets/arrow forward 18dp.svg"</a>
    `).join('\n')}
  </div>`
};
hello.style`
  div.schedule{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ---
  div.schedule a.mapel {
    width: 226px;
    height: 52px;
    color: #666;
    font-size: 16px;
    text-decoration: none;
    background-color: #fafafa;
    margin-bottom: 10px;
    border: 1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  } ---
  div.schedule a.mapel:first-child {
    color: #737373;
  } ---
  div.schedule a.mapel img {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 16px;
  } ---`


const main = () => {
  return`
    <main>
        ${ today() }
        ${ schedule() } 
    </main>`
};
hello.style`
  main {
    height: calc(var(--vh) - 64px);
    margin-top: 63px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ---`

export { main };