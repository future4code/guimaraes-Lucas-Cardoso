import { createContext, useContext, useState } from "react";

const PageContext = createContext()

const PageProvider = ({ children }) => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5])
    const [currentPage, setCurrentPage] = useState(1)

    const updatePages = (newPage) => {
        if (newPage > 498) {
            setPages([496, 497, 498, 499, 500])
        }
        else if (newPage > 3) {
            const newPages = [newPage - 2, newPage - 1, newPage, newPage +1 , newPage + 2]
            setPages(newPages)
        }
        else {
            setPages([1, 2, 3, 4, 5])
        }

        setCurrentPage(newPage)
    }

    return (
        <PageContext.Provider value={{
            pages,
            currentPage,
            updatePages
        }}>
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => useContext(PageContext)

export default PageProvider