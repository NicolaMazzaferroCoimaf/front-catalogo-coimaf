const getTableData = () => {
    return {
      columns: [30, 45],
      rows: [
        {
          dimension: 25,
          left: { code: 'NN 03', price: '135,00 €' },
          right: { code: 'NN 04', price: '155,00 €' }
        },
        {
          dimension: 50,
          left: { code: 'NN 13', price: '155,00 €' },
          right: { code: 'NN 14', price: '180,00 €' }
        }
      ]
    };
  };
  
  export default getTableData;
  