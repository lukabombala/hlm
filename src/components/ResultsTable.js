import React from 'react';
import { MDBCardBody, MDBContainer, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const TablePage = (props) => {
  const data_icons = {
    columns: [
      {
        'label': '#',
        'field': 'id',
        'sort': 'asc'
      },
      {
        'label': [<i key="Lorem" className="fa fa-leaf mr-2 blue-text" aria-hidden="true"></i>, 'Lorem'],
        'field': 'lorem',
        'sort': 'asc'
      },
      {
        'label': [<i key="Ipsum" className="fa fa-leaf mr-2 teal-text" aria-hidden="true"></i>, 'Ipsum'],
        'field': 'ipsum',
        'sort': 'asc'
      },
      {
        'label': [<i key="Dolor" className="fa fa-leaf mr-2 indigo-text" aria-hidden="true"></i>, 'Dolor'],
        'field': 'dolor',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'id': 1,
        'lorem': [<i key="cell1" className="far fa-gem mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-download mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-book mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 2,
        'lorem': [<i key="cell1" className="fa fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-gift mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="far fa-image mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 3,
        'lorem': [<i key="cell1" className="fa fa-magic mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-table mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-edit mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      }
    ]
  };

  return(
    <MDBContainer>
    <MDBTable btn fixed>
      <MDBTableHead columns={data_icons.columns} />
      <MDBTableBody rows={data_icons.rows} />
    </MDBTable>
    </MDBContainer>
  );
};

export default TablePage;