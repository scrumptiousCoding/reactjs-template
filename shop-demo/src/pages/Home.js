import tractors from '../dataObjects/tractors';
import storeObject from '../dataObjects/smallObject';
import notAvailable from '../assets/Image_not_available.png'
import Timer from '../components/Timer';
import { useState } from 'react';

const Home = () => {
    let [tractorsListing, setTractorsListing] = useState(tractors)
    let [sortField, setSortField] = useState('First Closing')

    var sortingFields = [
        {id: 1, description: 'First Closing'},
        {id: 2, description: 'Last Closing'},
        {id: 3, description: 'Highest Price'},
        {id: 4, description: 'Lowest Price'}
    ]

    var getCategoryDescription = (categoryId) => {
        let a = storeObject.categories.find(element => element.id === categoryId)
        if (a === undefined) return 'N/A'
        else return a.description
    }

    var filterCategory = (categoryId) => {
        setTractorsListing(tractors.filter(element => element.typeId === categoryId))
    }

    var filterMake = (makeDescription) => {
        setTractorsListing(tractors.filter(element => element.make === makeDescription))
    }

    var filterModel = (modelDescription) => {
        setTractorsListing(tractors.filter(element => element.model === modelDescription))
    }

    var filterYear = (year) => {
        setTractorsListing(tractors.filter(element => element.year === year))
    }

    var filterCondtition = (condtionId) => {
        setTractorsListing(tractors.filter(element => element.conditionId === condtionId))
    }

    var sortData = (sortField) => {
        let newList = []
        switch (sortField.id) {
            case 1:
                newList = tractors.sort((a, b) => a.timeLeft.localeCompare(b.timeLeft))
                break;
            case 2:
                newList = tractors.sort((a, b) => b.timeLeft.localeCompare(a.timeLeft))
                break;
            case 3:
                newList = tractors.sort(function(a, b){return b.price - a.price})
                break;
            case 4:
                newList = tractors.sort(function(a, b){return a.price - b.price})
                break;
            default:
                break;
        }

        setTractorsListing(newList)
        setSortField(sortField.description)
    }

    var displayAmount = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div>

            {/* Filters and Sorting */}
            <div className="row my-3">
                <div className="col">
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Category <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id} onClick={() => {filterCategory(category.id)}}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Make <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.makes.map((make) => (
                            <li className="dropdown-item" key={make.id} onClick={() => {filterMake(make.description)}}>{make.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Model <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.models.map((model) => (
                            <li className="dropdown-item" key={model.id} onClick={() => {filterModel(model.description)}}>{model.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Year <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.years.map((year) => (
                            <li className="dropdown-item" key={year} onClick={() => {filterYear(year)}}>{year}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Condition <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.conditions.map((condition) => (
                            <li className="dropdown-item" key={condition.id} onClick={() => {filterCondtition(condition.id)}}>{condition.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle" aria-expanded="false" onClick={() => {setTractorsListing(tractors)}}>Alle Filters <i className="bi bi-chevron-down"></i></button>
                </div>
                <div className="col text-end">
                    <span className='fw-bold me-2 align-middle'>{tractorsListing.length} results</span>
                    
                    <button type="button" className="btn btn-primary-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{sortField}<i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {sortingFields.map((field) => (
                            <li className="dropdown-item" key={field.id} onClick={() => {sortData(field)}}>{field.description}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Tractor display */}
            <div className="row">
                {tractorsListing.map((vehicle) => (
                    <div className="col-sm-3 mb-3" key={vehicle.id}>
                        <div className="card">
                            <img src={vehicle.imageLink === null ? notAvailable : vehicle.imageLink} alt="Could not load" />
                            <button className='btn btn-icon fs-7'><i className="bi bi-heart"></i></button>
                            <div className="card-body">
                                <h5 className='fw-bold mb-0'>{vehicle.tractorDescription}</h5>
                                <p className="sub-text">{vehicle.make} | {vehicle.model} | {getCategoryDescription(vehicle.typeId)} | {vehicle.year}</p>
                                <p className='align-middle mb-0'>
                                    <img src={vehicle.country.flagUrl} alt="" className='flag-image me-2 align-middle' />
                                    {vehicle.country.description}
                                </p>
                                <p>{vehicle.autionType.description}</p>

                                <label className='sub-text lh-1'>Current bid</label>
                                <div className="row p-0 m-0 mb-2">
                                    <div className="col m-0 p-0">
                                        <p className='lh-1 fw-bold fs-5 mb-0'>&euro; {displayAmount(vehicle.price.toFixed(2))}</p>
                                    </div>
                                    <div className="col m-0 p-0 ps-2 text-end">
                                        <span className='mb-0 align-bottom'>{vehicle.currentBids > 0 ? vehicle.currentBids + ' bids' : 'No bids'}</span>
                                    </div>
                                </div>

                                <Timer time={vehicle.timeLeft}/>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home;