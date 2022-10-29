import React from 'react'

const MainContent = () => {
  return (
    <div>
      <form>
        <input type='date' id='datepicker' />
        <select>
          <option value='cotton'>Cotton</option>
          <option text='linnen'>Linnen</option>
        </select>
        <input type='number' />
        <button type='submit'>Calculate</button>
      </form>
      <span>Your Estimated Shpipping Time Is</span>
    </div>
  )
}

export default MainContent