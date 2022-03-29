import styled from "styled-components";
import UserListDisplay from "../../components/UserListDisplay";

const Container = styled.div`

`

const UserList = ({ users, setUsers }) => {
    return (
        <Container>
            <UserListDisplay users={users} setUsers={setUsers} />
        </Container>
    )
}

export default UserList