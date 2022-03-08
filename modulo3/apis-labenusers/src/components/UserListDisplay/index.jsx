import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 390px;
    padding-top: 10px;
    padding-bottom: 20px;
    background-color: #212429;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0px 0px 25px 0px #00000040;
    height: 65vh;

    h1 {
        font-size: 35px;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 1px;
        margin: 10px;
    }
    
    div {
        width: 90%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    ul {
        text-align: center;
    }

    li {
        font-size: 25px;
        color: white;
        font-weight: 100;
        letter-spacing: 1px;
        margin: 10px;

        div {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 5px;

            button {
                height: 25px;
                width: 25px;
            }

            p {
                margin: 0;
                padding: 0;
            }
        }
    }
`

const UserListDisplay = ({ users, setUsers }) => {
    const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers = {
        headers: {
          Authorization: "lucas-cardoso-guimaraes"
        }
    }

    const removeFromState = (id) => {
        setUsers(users.filter((item) => item.id !== id))
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${apiUrl}/${id}`, headers)
            removeFromState(id)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <Container>
            <h1>Lista de Usuários</h1>
            <div>
                <ul>
                    {users.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <p>{item.name}</p>
                                    <button onClick={() => deleteUser(item.id)}>X</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Container>
    )
}

export default UserListDisplay