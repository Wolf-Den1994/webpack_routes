import { input } from '../game/game';
import { about } from './about';
import { contact} from './contact';
import { home } from './home';

interface IObjMain {
  [key: string]: string;
}

export const objectMain: IObjMain = {
  card: '4'
}

interface IRoutes {
  [key: string]: string;
}

const routes: IRoutes = {
  '/': home,
  '/contact': contact,
  '/about': about,
};

const rootDiv = <HTMLElement>document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname: string) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
  ololololo();
  input()
};

export function ololololo() {
  const selectCard = document.querySelector('#select-card');
  if (selectCard instanceof HTMLSelectElement) {
    objectMain.card = selectCard.value;
    // console.log('ololololo', objectMain)

    setTimeout(ololololo, 1000)
  }
}

const linkNavbarAbout = <HTMLElement>document.querySelector('.about');
const linkNavbarHome = <HTMLElement>document.querySelector('.home');
const linkNavbarContact = <HTMLElement>document.querySelector('.contact');

linkNavbarAbout.onclick = () => {
  onNavigate('/about');
  return false;
};
linkNavbarHome.onclick = () => {
  onNavigate('/');
  return false;
};
linkNavbarContact.onclick = () => {
  onNavigate('/contact');
  return false;
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};