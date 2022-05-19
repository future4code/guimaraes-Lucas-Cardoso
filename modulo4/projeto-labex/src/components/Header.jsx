import styled from 'styled-components'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Container = styled.header`
    background-color: var(--main-color);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;

    h2 {
        font-weight: 300;
        font-size: 25px;
        cursor: pointer;
        transition: all 0.2s ease;

        :hover {
            color: #393939;
        }
    }

    div {
        position: absolute;
        right: 0;
        margin-right: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            font-size: 30px;
        }
    }
`

const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <Container>
            <h2 onClick={() => navigate("/")}>LabeX</h2>
            <div onClick={logout}>
                <AiOutlineLogout />
            </div>
        </Container>
    )
}

export default Header