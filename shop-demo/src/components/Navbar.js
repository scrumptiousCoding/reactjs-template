import logo from '../assets/dudLogo.png'
import flag from '../assets/netherlands-flag.png'
import storeObject from '../dataObjects/smallObject'

const Navbar = () => {
    var breadcrumb = [
        {page: 'start', active: false, id: 1},
        {page: 'Auction: Tractors Netherlands', active: true, id: 2}
    ]
    var changeSelectedCountry = (newCountry) => {
        document.getElementById("countryDropdown").innerHTML = newCountry;
    }

    var countDownDate = new Date()
    countDownDate.setHours( countDownDate.getHours()+2 )

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("headerCountDown").innerHTML =  hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("headerCountDown").innerHTML = "00:00:00";
        }
      }, 1000);
    return (
        <div>
            {/* Top banner */}
            <div className="row justify-content-center secondary-background py-1">
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
                <div className="col-3">
                    <img src={logo} alt="" className='logo-image' />
                </div>
                <div className="col-6 text-center">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Placeholder" aria-label="Placeholder" />
                        <button className="btn btn-control-outline" type="button"><i className="bi bi-search"></i></button>
                    </div>
                </div>
                <div className="col-3 text-end">
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
            </div>

            {/* Menu banner */}
            <div className="row px-3 pb-3">
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
                    <div className="col-2">
                        <div className="p-2 bg-light fw-bold fs-5">
                            <i className="bi bi-clock"></i> <span id='headerCountDown'></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={flag} alt="" className='flag-image me-2 align-middle' />
                        <span className='me-3 align-middle'>Netherlands</span>
                        <span className='me-3 align-middle'>9 assets</span>
                        <span className='align-middle'>Open auction</span>
                    </div>
                    <div className="col text-end">
                        <button type="button" className="btn btn-no-back fw-bold">Auction Information <i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;