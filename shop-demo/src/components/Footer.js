import footerItems from '../dataObjects/footerItems'

const Footer = () => {
    return (
        <div>
            <hr />
            
            <div className="row">
                <div class=" col-12 col-md d-flex gap-2 order-2 order-md-1">
                    <button type="button" className="btn btn-secondary w-50 inherit-width-md">Inloggen</button>
                    <button type="button" className="btn btn-secondary w-50 inherit-width-md">Registreren</button>
                </div>
                <div className="col-12 col-md text-start text-md-end order-1 order-md-2">
                    <p className="fw-bold fs-5 mb-0">Meer dan 160.000 kavels per maand</p>
                </div>
            </div>


            <hr />

            {/* Footer links */}
            <div className="row">
                {footerItems.map((item) => (
                    <div className="col-12 col-md-3" key={item.id}>
                        <h5>{item.description}</h5>
                        <ul className="nav flex-column">
                            {item.divisions.map((listItem) => (
                                <li className="nav-item py-1" key={listItem.id}>{listItem.description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <hr />

            <div className="row footer-row justify-content-between pb-3 text-center text-md-start">
                <span className='shrink-on-md'>Link</span>
                <span className='shrink-on-md'>Link</span>
                <span className='shrink-on-md'>Link</span>
                <span className='shrink-on-md'>Link</span>
                <span className='shrink-on-md'>&copy;2022</span>
            </div>

        </div>
    );
}
 
export default Footer;