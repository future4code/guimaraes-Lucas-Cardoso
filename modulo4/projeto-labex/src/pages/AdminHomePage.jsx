import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'
import Button from '../components/Button'
import Button2 from '../components/Button2'
import wallpaper from '../images/wallpaper-no-shuttle.png'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import AdminTripsCard from '../components/AdminTripCard'

const Container = styled.div`
    background-color: var(--background);
    min-height: calc(100vh - 60px);
    color: var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 0;
        padding: 2%;
        font-size: 40px;
        text-align: center;
        font-weight: 300;
    }

    #back {
        position: absolute;
        margin-right: 650px;
        margin-top: 2%;
        padding: 15px 50px;
        width: auto;
        display: flex;

        span {
            font-size: 18px;
        }

        svg {
            margin-right: 5px;
            font-size: 20px;
        }
    }

    #add {
        position: absolute;
        margin-left: 650px;
        margin-top: 2%;
        padding: 15px;
        width: auto;
        display: flex;

        span {
            font-size: 18px;
        }

        svg {
            margin-right: 5px;
            font-size: 20px;
        }
    }

`

const CardContainer = styled.div`
    width: 80%;
    min-height: calc(75vh - 60px);
    padding: 20px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill,minmax(210px,1fr));
    overflow-y: auto;
    border-top: 1px solid lightgray;
`

const NoTravels = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span { 
        font-size: 25px;
        font-weight: 100;
        margin: 20px 00px;
    }

    button {
        padding: 15px;
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            font-size: 25px;
            margin-right: 5px;
        }
    }
`

const AdminHomePage = () => {
    const navigate = useNavigate()
    useProtectedPage()

    const [trips, setTrips] = useState([])

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trips")
            .then(res => setTrips(res.data.trips))
            .catch(err => console.log(err))
    }

    const deleteTrip = (id, name) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trips/${id}`, {
                headers: {
                    Auth: localStorage.getItem("token")
                }
            })
            .then(() => {
                alert(`Viagem ${name} deletada com sucesso!`)
                getTrips()
            })
            .catch(() => alert("Algo deu errado"))
    }

    useEffect(() => {
        getTrips()
    }, [])

    return (
        <>
        <Container>

            <Button id='back' onClick={() => navigate("/")}>
                <span>Voltar</span>
            </Button>
            <h1>Painel Administrativo</h1>
            {trips.length > 0 ? (
                <Button2 id='add' onClick={() => navigate("/admin/trips/create")}>
                    <MdAddCircle />
                    <span>Criar Viagem</span>
                </Button2>
            ) : null}

            <CardContainer>
                {trips.length === 0 ? (
                    <NoTravels>
                        <span>Nenhuma viagem criada</span>
                        <Button2 onClick={() => navigate("/admin/trips/create")}>
                            <MdAddCircle />
                            Criar Viagem
                        </Button2>
                    </NoTravels>
                ): (
                    trips.map(item => (
                        <AdminTripsCard
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            planet={item.planet}
                            duration={item.durationInDays}
                            date={item.date}
                            deleteTrip={() => deleteTrip(item.id, item.name)}
                        />
                    ))
                )}
                
            </CardContainer>
        </Container>
        </>
    )
}

export default AdminHomePage