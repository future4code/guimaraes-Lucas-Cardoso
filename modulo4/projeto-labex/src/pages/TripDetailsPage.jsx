import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import CandidatesCard from '../components/CandidatesCard'
import useProtectedPage from '../hooks/useProtectedPage'
import Button from '../components/Button'

const Container = styled.div`
    background-color: var(--background);
    min-height: calc(100vh - 60px);
    
    h1 {
        margin: 0;
        text-align: center;
        padding: 30px;
        color: white;
        font-weight: 200;
    }

    h2 {
        text-align: center;
        padding: 30px;
        color: white;
        font-weight: 200;
    }

    #voltar {
        padding: 10px;
        width: 100px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        transform: translate(-350px, 20px);
    }
`

const Candidates = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    padding: 0px 25px;
`

const Aprovados = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`

const Approved = styled.div`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: #5656563b;
    margin: 8px;
    padding: 20px;

    span {
        text-decoration: dotted;
        color: white;
    }
`

const TripDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    useProtectedPage()

    const [trip, setTrip] = useState({})

    const candidates = trip.candidates || []
    const approved = trip.approved || []

    const getTripsDetail = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trip/${id}`
        const headers = {
            headers: {
                Auth: localStorage.getItem("token")
            }
        }

        axios
            .get(url, headers)
            .then(res => setTrip(res.data.trip))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTripsDetail()
    }, [])

    const decideCandidate = (candidateId, decide) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trips/${trip.id}/candidates/${candidateId}/decide`

        const body = {
            approve: decide
        }

        const headers = {
            headers: {
                Auth: localStorage.getItem("token")
            }
        }

        axios
            .put(url, body, headers)
            .then(() => {
                const msg = (decide ? "aprovado" : "recusado")
                alert(`Candidato ${msg} com sucesso`)
                getTripsDetail()
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Button onClick={() => navigate("/admin/trips/list")} id="voltar">Voltar</Button>
            <h1>Informações de "{trip.name}"</h1>
            <h2>Candidatos Pendentes</h2>
            <Candidates>
                {candidates.map(item => (
                    <CandidatesCard
                    name={item.name}
                    age={item.age}
                    text={item.applicationText}
                    job={item.profession}
                    id={item.id}
                    decideCandidate={decideCandidate}
                    />
                ))}
            </Candidates>

            <h2>Candidatos Aprovados</h2>
            <Aprovados>
                {approved.map(item => (
                    <Approved>
                        <span>• {item.name}</span>
                    </Approved>
                ))}
            </Aprovados>

        </Container>
    )
}

export default TripDetailsPage