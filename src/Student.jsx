import react from 'react'

const Student = (props) => {
    return (
        <tr>
            <th scope="row">
                {props.id}
            </th>
            <td>
            {props.firstName}
            </td>
            <td>
                {props.lastName}
            </td>
            <td>
                {props.useName}
            </td>
      </tr>
    );
};

export default Student