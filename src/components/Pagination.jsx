import React from 'react'

const Pagination = ({ arrayPages, currentPage, setCurrentPage, quantityPages }) => {

  const prevPage = () => {
    if (currentPage - 1 === 0) {
      setCurrentPage(quantityPages)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage + 1 > 0) {
      setCurrentPage(quantityPages)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }

const changePageTo = n => setCurrentPage(n)


  return (
    <div className='Pagination-container'>
      <div onClick={prevPage} className='pagination-button'>&#60;</div>
      <ul className='Pagination-container-number'>
        {
          arrayPages?.map(num => (<li onClick={() => changePageTo(num)} key={num} className='pagination-number'>{num}</li>))
        }

      </ul>
      <div onClick={nextPage} className='pagination-button'>&#62;</div>
    </div>
  )

}

export default Pagination