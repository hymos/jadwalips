
window.toggleDark = () => {
  if (localStorage.getItem('darkMde') == 'false') {
    localStorage.setItem('darkMde','true')
  } else {
    localStorage.setItem('darkMde','false')
  }
  renderDarkMode()
}

window.renderDarkMode = () => {
  let darkEl = [
    document.querySelector('html'),
    document.querySelector('main'),
    document.querySelector('nav'),
    document.querySelector('.day')
  ]
  manyEl('a.mapel')
  manyEl('.mapel svg')
  
  if (localStorage.getItem('darkMde') === 'true') {
    changeIcon('light')
    darkEl.forEach(e=> e.classList.add('dark'))
    metaColor('#2e2e2e')
  } else {
    changeIcon('dark')
    darkEl.forEach( e=> e.classList.remove('dark'))
    metaColor('#4f65ea')
  }
  
  function changeIcon(name) {
    document.querySelector('.dot').innerHTML =` <img src="assets/${name} mode 24dp.svg">`
  }
  function metaColor(color) {
    const metaTag = document.querySelector('meta[name="theme-color"]')
    metaTag.setAttribute("content", color);
  }
  function manyEl(elm) {
    const mnyEl = document.querySelectorAll(elm)
    mnyEl.forEach(el=> darkEl.push(el))
  }
}

export const startDark = () => {
  if (localStorage.getItem('darkMde') === null) {
    window.localStorage.setItem('darkMde','false')
  } else {
    renderDarkMode()
  }
}

