import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [userInput, setUserInput] = useState("")
	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<button onClick={() => props.enviarComentario(userInput)} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario