import { state } from './index';

export function handleGreetingClick() {
  state._update('changeGreeting', state.greeting + '🍖')
};


export function playAudio(id) {
  (document.getElementById(id) as any).play();
}