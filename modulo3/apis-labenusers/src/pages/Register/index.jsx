import styled from "styled-components";
import FormRegister from "../../components/FormRegister";

const Container = styled.div`

`

const Register = ({ setUsers }) => {
    return (
        <Container>
            <FormRegister setUsers={setUsers} />
        </Container>
    )
}

export default Register