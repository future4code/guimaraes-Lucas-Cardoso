import styled from 'styled-components'
import { BsFillTrashFill } from 'react-icons/bs'
import mercurio from '../images/planets/mercurio.jpg'
import venus from '../images/planets/venus.jpg'
import terra from '../images/planets/terra.jpg'
import marte from '../images/planets/marte.jpg'
import jupiter from '../images/planets/jupiter.jpg'
import saturno from '../images/planets/saturno.jpg'
import urano from '../images/planets/urano.jpg'
import netuno from '../images/planets/netuno.jpg'
import plutao from '../images/planets/plutao.jpg'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    background-color: black;
    background-image: ${props => `url(${props.planet})`};
    background-size: 80%;
    background-position: 50% 10%;
    background-repeat: no-repeat;

    #title {
        background-color: #bbbbbb;
        color: black;
        height: 28%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
        width: 100%;
    }

    h3 {
        margin: 25px;
        text-align: center;
        font-size: 20px;
        font-weight: 300;
    }

    svg {
        position: absolute;
        font-size: 25px;
        color: white;
        opacity: 0%;
        transform: translate(-100px, 10px);
        transition: all 0.2s ease;
        z-index: 3;

        :hover {
            color: #ff0000c4;
        }
    }

    :hover {
        svg {
            opacity: 100%;
        }

        #opacity {
            opacity: 100%;
        }

        #title {
            background-color: #dfdfdf;
        }
    }
`

const Opacity = styled.div`
    background-color: #000000bf;
    width: 100%;
    height: 72%;
    z-index: 2;
    border-radius: 10px;
    opacity: 0%;
    transition: all 0.2s ease;
`

const AdminTripsCard = (props) => {
    const navigate = useNavigate()
    const checkPlanet = () => {
        switch (props.planet) {
            case 'Mercúrio':
                return mercurio
            case 'Vênus':
                return venus
            case 'Terra':
                return terra
            case 'Marte':
                return marte
            case 'Júpiter':
                return jupiter
            case 'Saturno':
                return saturno
            case 'Urano':
                return urano
            case 'Netuno':
                return netuno
            case 'Plutão':
                return plutao
        }
    }

    const planet = checkPlanet()
    return (
        <>
        <Container planet={planet} onClick={() => navigate(`/admin/trips/${props.id}`)} >
            <BsFillTrashFill onClick={() => props.deleteTrip()} />
            <Opacity id='opacity' />
            <div id='title'>
                <h3>{props.name}</h3>
            </div>
        </Container>
        </>
    )
}

export default AdminTripsCard