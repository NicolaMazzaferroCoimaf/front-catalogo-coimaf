import '../assets/css/LpTable.css';
import React from 'react';


const LpTable = ({ title = 'Catalogo 2025', description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum, quasi eaque alias odit velit repellat, quo dolorem iusto, fugiat praesentium optio mollitia facilis suscipit laudantium animi voluptatum consectetur voluptas.', data }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>

      <table>
        <thead>
          <tr>
            <th className="lp-header">
              <span className="lp-letter l">L</span>
              <span className="lp-letter p">P</span>
              &nbsp;
            </th>
            {data.columns.map((col, idx) => (
              <React.Fragment key={idx}>
                <th colSpan="2" className="value-header">{col}</th>
                {idx === 0 && <th className="spacer" />}
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.dimension}</td>
              <td>{row.left.code}</td>
              <td>{row.left.price}</td>
              <td className="spacer"></td>
              <td>{row.right.code}</td>
              <td>{row.right.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LpTable;
