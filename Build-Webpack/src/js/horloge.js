import format from 'date-fns/format';
import config from '../config/config.json5';
import { getRandomIntInclusive } from './random';

class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    const r = getRandomIntInclusive(0, 255);
    const g = getRandomIntInclusive(0, 255);
    const b = getRandomIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    this._container.innerText = format(now, config.format);
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}

export { Horloge };


