const simpleData = {
  oldUrl: '/oldUrl',
  list: [{ name: 'one', id: 1 }, { name: 'two', id: 2 }],
};

export function fetch1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(simpleData);
    }, 2000);
  });
}


export function fetch2(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign({}, simpleData, { url: `${url  }/newUrl` }));
    }, 4000);
  });
}
