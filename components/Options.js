import React from 'react'

const Option = ({ratesData}) => {
  return (     
            Object.keys(ratesData).map(currency => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))   
  )
}

export default Option