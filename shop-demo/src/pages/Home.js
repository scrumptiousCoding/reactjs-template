import tractors from '../dataObjects/tractors';
import storeObject from '../dataObjects/smallObject';

const Home = () => {
    var sortingFields = [
        {id: 1, description: 'First Closing'},
        {id: 2, description: 'Last Closing'}
    ]
    return (
        <div>

            {/* Filters and Sorting */}
            {/* TODO: create filter button component */}
            <div className="row my-3">
                <div className="col">
                    <button type="button" class="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Category <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Make <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Model <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Year <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-secondary-border dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">Condition <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-secondary-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Alle Filters <i class="bi bi-chevron-down"></i></button>
                    <ul className="dropdown-menu">
                        {storeObject.categories.map((category) => (
                            <li className="dropdown-item" key={category.id}>{category.description}</li>
                        ))}
                    </ul>
                </div>
                <div className="col text-end">
                    <span className='fw-bold me-2 align-middle'>{tractors.length} results</span>
                    
                    <button type="button" class="btn btn-primary-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">First Closing <i class="bi bi-chevron-down"></i></button>
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
                    <div className="col-sm-3" key={vehicle.id}>
                        <div className="card">
                            <img src={vehicle.imageLink} alt="Could not load" />
                            <div className="card-body">
                                <h5>{vehicle.tractorDescription}</h5>
                                <p className="sub-text">{vehicle.make} | {vehicle.model} | {vehicle.typeId} | {vehicle.year}</p>
                                <p>{vehicle.country}</p>
                                <p>{vehicle.autionType.description}</p>

                                <label>Current bid</label>
                                <div className="row p-0 m-0">
                                    <div className="col">
                                        <p>R 0.00</p>
                                    </div>
                                    <div className="col">
                                        <p>{vehicle.currentBids}</p>
                                    </div>
                                </div>

                                Timer : {vehicle.timeLeft}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home;