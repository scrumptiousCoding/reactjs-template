import tractors from '../dataObjects/tractors';
import storeObject from '../dataObjects/smallObject';
import notAvailable from '../assets/Image_not_available.png'
import Timer from '../components/Timer';

const Home = () => {
    var sortingFields = [
        {id: 1, description: 'First Closing'},
        {id: 2, description: 'Last Closing'}
    ]

    var getCategoryDescription = (categoryId) => {
        let a = storeObject.categories.find(element => element.id === categoryId)
        if (a === undefined) return 'N/A'
        else return a.description
    }

    return (
        <div>

            {/* Filters and Sorting */}
            {/* TODO: create filter button component */}
            <div className="row my-3">
                <div className="col">
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Category <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Make <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Model <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Year <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Condition <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-secondary-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Alle Filters <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                </div>
                <div className="col text-end">
                    <span className='fw-bold me-2 align-middle'>{tractors.length} results</span>
                    
                    <button type="button" className="btn btn-primary-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">First Closing <i className="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {sortingFields.map((field) => (
                            <li className="dropdown-item" key={field.id}>{field.description}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Tractor display */}
            <div className="row">
                {tractors.map((vehicle) => (
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
                                        <p className='lh-1 fw-bold fs-5 mb-0'>&euro; {vehicle.price.toFixed(2)}</p>
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