const parseXlsx = require('excel').default;

parseXlsx('./data/setup-data.xlsx').then((data) => {
  console.log(data);
});
