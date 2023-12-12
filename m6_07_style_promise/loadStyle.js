const styles = new Map();

const loadStyle = url => {
  if (styles.has(url)) {
    return styles.get(url);
  }

  // создаем Promise один раз при вызове модального окна
  // запоминаем, записываем в styles с ключем url
  // и повторно с тем же url всегда будем возвращать
  const stylePromise = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;  
    link.addEventListener('load', ()=> {
      resolve();
    });  
    document.head.append(link);
  });

  styles.set(url, stylePromise);

  return stylePromise;
};



// // хэш
// const styles = new Set();

// const loadStyle = (url, callback) => {
//   // если есть url, не создаем новый <link>
//   if (styles.has(url)) {
//     callback();
//     return;
//   }

//   const link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.href = url;

//   // чтобы стили и контент грузились одновременно
//   link.addEventListener('load', ()=> {
//     callback();
//   });

//   document.head.append(link);
//   styles.add(url);
// };

export default loadStyle;