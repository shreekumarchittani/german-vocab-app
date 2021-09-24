import React from 'react';
import './Table.css'

const Table = (props) => {
    return (
      <table className="table">
      <thead>
        <tr>
          <th scope="col">{props.article}</th>
          
        </tr>
      </thead>
      <tbody>
        {props.vocab.map(voc => {
          return (
            <tr key={voc.noun}>
              <td>{voc.noun}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    )
}

export default Table;