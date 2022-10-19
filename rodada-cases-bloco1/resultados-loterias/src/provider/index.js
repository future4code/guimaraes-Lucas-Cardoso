import { createContext, useContext, useEffect, useState } from "react";

const LotteryContext = createContext()

const LotteryProvider = ({ children }) => {
    const [lotteries, setLotteries] = useState([])
    const [selectedLottery, setSelectedLottery] = useState({})

    const getLotteries = () => {
        fetch(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias/`)
        .then(res => res.json())
        .then(res => setLotteries(res))
    }
    
    const getContestWithId = (id) => {
        fetch(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`)
        .then(res => res.json())
        .then(res => {
            const result = res.filter(contest => id === contest.loteriaId)
            getResult(result[0].concursoId)
        })
    }
    
    const getResult = async (contestId) => {
        try {
            fetch(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contestId}`)
            .then(res => res.json())
            .then(res => setSelectedLottery(res))
        }

        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <LotteryContext.Provider value={{
            lotteries,
            selectedLottery,
            getLotteries,
            getContestWithId,
        }}>
            {children}
        </LotteryContext.Provider>
    )
}

export const useLottery = () => useContext(LotteryContext)

export default LotteryProvider