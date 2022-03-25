import styled from 'styled-components'
import Button from '../Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
`

const InfoContainer = styled.div`
    width: 360px;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    img {
        max-height: 100%;
        max-width: 100%;
        z-index: 1;
    }

    .info {
        position: absolute;
        z-index: 1;
        color: white;
        bottom: 0;
        padding: 25px 10px;
        width: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

        p {
            margin: 0;
            padding: 15px;
            text-shadow: -1px 2px 6px #000000;
        }

        div {
            display: flex;
            align-items: center;
            padding: 0px 15px;
            text-shadow: -1px 2px 13px #000000;

            h3 {
                font-size: 0px 25px;
                padding: 0;
                margin: 0;
            }
            
            span {
                margin-left: 10px;
                font-size: 20px;
            }
        }
    }
`

const Background = styled.div`
    position: absolute;
    background-image: ${props => props.background};
    filter: blur(25px);
    width: 100%;
    height: 100%;
`

const ButtonContainer = styled.div`
    width: 85%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

function Swipe ({ currentProfile, choosePerson, over }) {
    return (
        <Container>
            <InfoContainer>
                <Background background={`url(${currentProfile.photo !== null ? currentProfile.photo : "https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png"})`} />
                <img src={currentProfile.photo !== null ? currentProfile.photo : "https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png"} alt={currentProfile.name} />
                <div className='info'>
                    <div>
                        <h3>{currentProfile.name},</h3>
                        <span>{currentProfile.age}</span>
                    </div>
                    <p>{currentProfile.bio}</p>
                </div>
            </InfoContainer>
            
            <ButtonContainer>
                <div>  
                    <Button
                        choosePerson={() => choosePerson(false)}
                        text="X"
                        color="red"
                    />
                </div>
                <div>
                    <Button
                        choosePerson={() => choosePerson(true)}
                        text="♥"
                        color="green"
                    />
                </div>
            </ButtonContainer>
        </Container>
    )
}

export default Swipe