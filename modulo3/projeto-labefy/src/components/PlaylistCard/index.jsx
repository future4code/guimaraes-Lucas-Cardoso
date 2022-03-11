import React from "react";
import styled from 'styled-components'
import { BsPlayCircleFill } from 'react-icons/bs'

const Container = styled.div`
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    color: var(--white);
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.33s ease;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .title {
        width: 100%;
    }

    h3 {
        margin: 0;
        padding-top: 20px;
        padding-bottom: 15px;
        font-size: 1.4em;
    }

    picture {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
        }

        svg {
            position: absolute;
            color: var(--main-color);
            width: 50px;
            height: 50px;
            background-color: white;
            border-radius: 50px;
            transform: translate(60px, 100px);
            opacity: 0%;
        }
    }

    :hover {
        background-color: #363636;

        svg {
            transform: translate(60px, 60px);
            opacity: 100%;

            transition: opacity 0.6s ease, transform 0.2s ease;
        }
    }
`

const PlaylistCard = ({ id, name, img }) => {
    return (
        <Container>
            <picture>
                <img src={img} alt={name} />
                <BsPlayCircleFill />
            </picture>
            <div className="title">
                <h3>{name}</h3>
            </div>
        </Container>
    )
}

export default PlaylistCard