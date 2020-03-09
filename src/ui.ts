import { playAudio } from './actions';
import html from 'nanohtml';
import { routes, navbarIcons } from './store';
import { REQUIRED_STYLES } from './styles'

export function AppRoot(state) {
  return html`
  <div id="app">
    ${REQUIRED_STYLES}
    <div class="page">
      ${routing(state)}
    </div>
    ${navbar()}
  </div>
  `
}

export function routing(state) {
  switch (state.currentPage.name) {
    default:
      return html`
        <img src="/icon.png" />
        <div class="row">
          <button class="button red" onclick="${() => playAudio('im-going-to-jail')}">Im gonna jail</button>
          <audio controls id="im-going-to-jail">
            <source src="im-going-to-jail.ogg" type="audio/ogg">
          </audio>
        </div>
        <div class="row">
          <button class="button blue" onclick="${() => playAudio('nuts')}">Nut!</button>
          <audio controls id="nuts">
            <source src="nuts.ogg" type="audio/ogg">
          </audio>
        </div>
    `
  }
}
export function navbar() {
  return html`
  <div class="nav">
  </div>
      `;
}

export function icon(type) {
  return html`
    <i class="large material-icons">${type}</i>
  `
}