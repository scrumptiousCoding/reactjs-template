import logo from '../assets/dudLogo.png'
import flag from '../assets/netherlands-flag.png'
import storeObject from '../dataObjects/smallObject'
import Timer from './Timer'

const Navbar = () => {
    var breadcrumb = [
        {page: 'start', active: false, id: 1},
        {page: 'Auction: Tractors Netherlands', active: true, id: 2}
    ]
    var changeSelectedCountry = (newCountry) => {
        document.getElementById("countryDropdown").innerHTML = newCountry;
    }

    var nextBidTime = new Date()
    nextBidTime.setHours( nextBidTime.getHours()+2 )

    return (
        <div>
            {/* Top banner */}
            <div className="row justify-content-center secondary-background py-1 d-none d-md-flex">
                <div className="col-2">
                    <span className="smaller-text"><i className="bi bi-check-lg me-1"></i>Europe's largest auction house</span>
                </div>
                <div className="col-2">
                    <span className="smaller-text"><i className="bi bi-check-lg me-1"></i>Europe's largest auction house</span>
                </div>
                <div className="col-2">
                    <span className="smaller-text"><i className="bi bi-check-lg me-1"></i>Europe's largest auction house</span>
                </div>
            </div>

            {/* Logo banner */}
            <div className="row py-4 align-items-center ">
                <div className="col col-md-3 order-md-1">
                    <img src={logo} alt="" className='logo-image' />
                </div>
                <div className="col-3 text-end remove-on-sm order-md-3">
                    <div className="btn-group">
                        <button type="button" className="btn btn-no-back dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id='countryDropdown'>NL <i className="bi bi-chevron-down"></i></button>
                        <ul className="dropdown-menu">
                            <li className='dropdown-item' onClick={() => {changeSelectedCountry('NL')}}>NL</li>
                            <li className='dropdown-item' onClick={() => {changeSelectedCountry('ENG')}}>ENG</li>
                            <li className='dropdown-item' onClick={() => {changeSelectedCountry('USA')}}>USA</li>
                            <li className='dropdown-item' onClick={() => {changeSelectedCountry('SA')}}>SA</li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-icon"><i className="bi bi-heart"></i></button>
                    <button type="button" className="btn btn-secondary"><i className="bi bi-person"></i> Account</button>
                </div>
                <div className="col text-end d-md-none order-md-3">
                    <button type="button" className="btn btn-icon fs-5"><i className="bi bi-heart"></i></button>
                    <button type="button" className="btn btn-icon fs-5"><i className="bi bi-person"></i></button>
                    <button type="button" className="btn btn-icon fs-5" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" ><i className="bi bi-list"></i></button>
                </div>

                
                <div className="col-12 mt-2 accordion-collapse collapse bg-secondary" id="collapseOne" >
                    <ul className="list-group">
                        <li className="list-group-item">Browse by Category</li>
                        <li className="list-group-item">Autions</li>
                        <li className="list-group-item">Help &amp; Contact</li>
                    </ul>
                </div>
                
                <div className="col-12 col-md-6 text-center order-md-2 mt-3 mt-remove-on-md">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="What are you looking for..." aria-label="Placeholder" />
                        <button className="btn btn-control-outline" type="button"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>


            {/* Menu banner */}
            <div className="row px-3 pb-3 d-none d-md-flex">
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-no-back dropdown-toggle fw-bold fs-5" data-bs-toggle="dropdown" aria-expanded="false" id='countryDropdown'>Browse by category <i className="bi bi-chevron-down"></i></button>
                        <ul className="dropdown-menu">
                            {storeObject.categories.map((category) => (
                                <li className="dropdown-item" key={category.id}>{category.description}</li>
                            ))}
                        </ul>
                    </div>
                    <button type="button" className="btn btn-no-back fw-bold fs-5">Auctions</button>
                </div>
                <div className="col text-end">
                    <button type="button" className="btn btn-no-back fw-bold fs-5">Help & Contact</button>
                </div>
            </div>

            <div className="secondary-background py-2">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {breadcrumb.map((crumb) => (
                                <li className={crumb.active ? 'breadcrumb-item active' : 'breadcrumb-item'} key={crumb.id}>{crumb.page}</li>
                            ))}
                        </ol>
                    </nav>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>Tractors Netherlands</h3>
                    </div>
                    <div className="col-2 remove-on-sm">
                        <div className="p-2 bg-light fw-bold fs-5">
                            <Timer time={nextBidTime} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md">
                        <img src={flag} alt="" className='flag-image me-2 align-middle' />
                        <span className='me-3 align-middle'>Netherlands</span>
                        <span className='me-3 align-middle'>9 assets</span>
                        <span className='align-middle'>Open auction</span>
                    </div>
                    <div className="col-12 d-md-none my-3">
                        
                        <div className="p-2 bg-light fw-bold fs-5">
                            <Timer time={nextBidTime} />
                        </div>
                    </div>
                    <div className="col-12 col-md text-center text-md-end">
                        <button type="button" className="btn btn-no-back fw-bold">Auction Information <i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;