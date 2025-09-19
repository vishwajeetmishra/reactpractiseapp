import { useUsers } from '../hooks/UsersHook'
import TableGrid from '../components/TableGrid';

type Props = {}

const Users = (_props: Props) => {
    const { users, loading, error } = useUsers();
    console.log(users, loading, error);
    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <TableGrid data={users}/>
    )
}

export default Users;