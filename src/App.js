import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  // const [pages, setPages] = useState([])
  const { loading, data: pages } = useFetch()
  const [currPgIdx, setCurrPgIdx] = useState(0)
  const [currPg, setCurrPg] = useState(pages[currPgIdx])
  useEffect(() => {
    checkNextPrevBtnEvent()
    setCurrPg(pages[currPgIdx])
  }, [loading, currPgIdx])
  const checkNextPrevBtnEvent = () => {
    const lastIdx = pages.length - 1
    if (currPgIdx < 0) setCurrPgIdx(lastIdx)
    else if (currPgIdx > lastIdx) setCurrPgIdx(0)
  }
  // console.log('data', data)
  console.log('pages', pages)
  console.log('currPg', currPg)
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {currPg &&
            currPg.map((follower) => {
              console.log('follower', follower)
              return <Follower key={follower.id} {...follower} />
            })}
        </div>
        <div className='btn-container'>
          <button
            className='prev-btn'
            onClick={() => setCurrPgIdx(currPgIdx - 1)}
          >
            prev
          </button>
          {pages.map((_, idx) => {
            const isActive = currPgIdx === idx
            return (
              <button
                className={isActive ? 'page-btn active-btn' : 'page-btn'}
                onClick={() => setCurrPgIdx(idx)}
              >
                {idx + 1}
              </button>
            )
          })}
          <button
            className='next-btn'
            onClick={() => setCurrPgIdx(currPgIdx + 1)}
          >
            next
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
