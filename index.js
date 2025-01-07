import {
    computePosition,
    flip,
    shift,
    offset,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm';

const quotes = document.querySelector("#quotes");
const top = document.querySelector("#top");
const right = document.querySelector("#right");
const bottom = document.querySelector("#bottom");

computePosition(quotes, top, {
    placement: 'top-start',
    middleware: [offset(), flip(), shift()],
  }).then(({x, y}) => {
    Object.assign(top.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
computePosition(quotes, right, {
    placement: 'right-start',
    middleware: [offset(), flip(), shift()],
  }).then(({x, y}) => {
    Object.assign(right.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
computePosition(quotes, bottom, {
    placement: 'bottom-start',
    middleware: [offset(), flip(), shift()],
  }).then(({x, y}) => {
    Object.assign(bottom.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });