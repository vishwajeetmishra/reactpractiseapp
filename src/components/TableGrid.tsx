import React from 'react'

type Props = {
    data: any
}

const TableGrid = ({data} : Props) => {
  return (
    <React.Fragment>
        <ul>
            {
            data.map((tr:any) => 
                <li key={tr.id}> {tr.name} { tr.email }</li>
            )
        }
        </ul>
    </React.Fragment>
  )
}

export default TableGrid