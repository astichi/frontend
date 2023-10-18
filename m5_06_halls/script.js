'use strict';

{
  const app = document.querySelector('#app');

  let countArea = 0;

  const createSeat = i => {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.dataset.seatNumber = i;
    return seat;
  };

  const createLine = (countLine, seatInLine) => {
    const line = document.createElement('div');
    line.classList.add('line');
    line.dataset.lineNumber = countLine;

    for (let i = 1; i <= seatInLine; i++) {
      line.append(createSeat(i));
    }

    return line;
  };

  // x - ряды
  // y - количество стульев
  const createArea = (x, y) => {
    countArea += 1;

    const area = document.createElement('div');
    area.classList.add('area');
    area.dataset.areaNumber = countArea;

    // i - количество стульев
    for (let i = 1; i <= x; i++) {
      area.append(createLine(i, y));
    }

    return area;
  };

  app.append(createArea(5, 6));
  app.append(createArea(8, 6));
  app.append(createArea(6, 6));

  // навешать событие на area или app
  app.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('seat')) {
      console.log(target);

      const seat = target.dataset.seatNumber;
      const line = target.closest('.line').dataset.lineNumber;
      const area = target.closest('.area').dataset.areaNumber;

      target.style.backgroundColor = 'lightpink';

      alert(`зал №${area}\nряд №${line}\nместо №${seat}`);
    }
  });
} 