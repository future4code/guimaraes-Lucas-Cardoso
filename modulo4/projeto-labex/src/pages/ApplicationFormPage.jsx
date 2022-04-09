import styled from 'styled-components'
import Button2 from '../components/Button2'
import Button from '../components/Button'
import wallpaper from '../images/wallpaper-no-shuttle.png'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import axios from 'axios'
import useForm from '../hooks/useForm'

const Container = styled.div`
    background-color: var(--background);
    //background-image: url(${wallpaper});
    //background-size: cover;
    min-height: calc(100vh - 60px);
    color: var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        margin-top: 2%;
        padding: 10px;
        font-size: 40px;
        text-align: center;
        font-weight: 300;
    }

`

const FormContainer = styled.form`
    width: 525px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

    > * {
        margin: 10px;
    }

    div {
        display: flex;
    }

    button {
        padding: 17px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-size: 20px;
            font-weight: 300;
        }

        svg {
            font-size: 35px;
            margin-right: 15px;
        }
    }
`

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const [form, onChangeForm] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "Brasil",
    })

    const applyToTrips = (e) => {
        e.preventDefault()

        const id = localStorage.getItem("currentTripId")
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trips/${id}/apply`
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }

        console.log(body)

        axios
            .post(url, body)
            .then(() => {
                alert("Aplicação realizada com sucesso!")
                navigate("/trips/list")
            })
            .catch(() => alert("Algo deu errado"))
    }

    return (
        <>
        <Container>
            <h1>Inscrever-se para: <br/><i>"{localStorage.getItem("currentTripName")}"</i></h1>
            <FormContainer onSubmit={applyToTrips}>
                <Input
                    value={form.name}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Nome"
                    name="name"
                    required
                />
                <Input
                    value={form.age}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Idade"
                    name="age"
                    type="number"
                    required
                />
                <Input
                    value={form.applicationText}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Texto de candidatura"
                    name="applicationText"
                    required
                />
                <Input
                    value={form.profession}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Profissão"
                    name="profession"
                    required
                />
                <div>
                <Button onClick={() => navigate("/trips/list")}>
                    <span>Voltar</span>
                </Button>
                <Button2 type="submit">
                    <span>Aplicar</span>
                </Button2>
                </div>
            </FormContainer>
        </Container>
        </>
    )
}

export default ApplicationFormPage