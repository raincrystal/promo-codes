import React, { useState, useEffect } from 'react'
import PromoCard from './PromoCard'

const Center = () => {
  const [filterValue, setFilterValue] = useState('')
  const [services, setServices] = useState([])
  const [filteredServices, setFilteredServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/services`)
      const data = await resp.json()
      setServices(data)
      setFilteredServices(data)
    }
    fetchServices()
  }, [])

  useEffect(() => {
    const filteredServices = services.filter(service => service.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
    setFilteredServices(filteredServices)
  }, [filterValue, services])

  const toggleActivateBonus = async (service) => {
    const updatedService = { ...service, isActivated: !service.isActivated }
    const resp = await fetch(`${process.env.REACT_APP_API_URL}/services/${service.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedService),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    await resp.json()
    const newServices = services.map(service => {
      if (service.id === updatedService.id) return updatedService
      else return service
    })
    setServices(newServices)
  }

  const handleResetFilters = () => setFilterValue('')

  return (
    <div className="py-6 px-10">
      {/* heading */}
      <div className="text-6xl font-extralight text-gray-800">
        Services
      </div>

      {/* filter section */}
      <div className="mt-8">
        <label htmlFor="price" className="block text-sm font-medium text-gray-500 uppercase mb-1">Filter</label>
        <input
          type="text"
          name="price"
          id="price"
          className="outline-none focus:ring-2 pl-4 pr-12 py-4 sm:text-sm border border-gray-200 rounded"
          placeholder="Filter services"
          value={filterValue}
          onChange={({ target }) => setFilterValue(target.value)}
        />
        <button onClick={handleResetFilters} className="ml-3 py-3 px-8 bg-gray-100 outline-none focus:outline-none focus:ring-2 border border-gray-200 rounded">
          Reset
        </button>
      </div>

      {/* promo cards */}
      {
        filteredServices.map(service => (
          <PromoCard
            key={service.id}
            service={service}
            toggleActivateBonus={toggleActivateBonus}
          />
        ))
      }
    </div>
  )
}

export default Center
