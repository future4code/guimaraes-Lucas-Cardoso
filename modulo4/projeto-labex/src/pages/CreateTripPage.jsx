import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'
import Button2 from '../components/Button2'
import Button from '../components/Button'
import wallpaper from '../images/wallpaper-no-shuttle.png'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Select from '../components/Select'
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

const CreateTripPage = () => {
    const navigate = useNavigate()

    useProtectedPage()

    const [form, onChangeForm] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        duration: 0,
    })

    const createTrip = (e) => {
        e.preventDefault()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/trips"
        const token = localStorage.getItem("token")
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration,
        }
        const headers = {
            headers: {
                Auth: token
            }
        }

        axios
            .post(url, body, headers)
            .then(() => navigate("/admin/trips/list"))
            .catch(() => alert("Algo deu errado"))
    }

    return (
        <>
        <Container>
            <h1>Criar Viagem</h1>
            <FormContainer onSubmit={createTrip}>
                <Input
                    value={form.name}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Nome"
                    name="name"
                    required
                />
                <Select name="planet" required value={form.planet} onChange={(e) => onChangeForm(e)}>
                    <option value="" selected disabled>Escolha um planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </Select>
                <Input
                    value={form.date}
                    onChange={(e) => onChangeForm(e)}
                    name="date"
                    type="date"
                    required
                />
                <Input
                    value={form.description}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Descrição"
                    name="description"
                    required
                />
                <Input
                    value={form.duration}
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Duração em dias"
                    name="duration"
                    type="number"
                    required
                />
                <div>
                    <Button onClick={() => navigate("/admin/trips/list")}>
                        <span>Voltar</span>
                    </Button>
                    <Button2 type="submit">
                        <MdAddCircle />
                        <span>Criar Viagem</span>
                    </Button2>
                </div>
            </FormContainer>
        </Container>
        </>
    )
}

export default CreateTripPage