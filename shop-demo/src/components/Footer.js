import footerItems from '../dataObjects/footerItems'

const Footer = () => {
    return (
        <div>
            <hr />
            
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-secondary me-2">Inloggen</button>
                    <button type="button" className="btn btn-secondary">Registreren</button>
                </div>
                <div className="col text-end">
                    <p className="fw-bold fs-5 mb-0">Meer dan 160.000 kavels per maand</p>
                </div>
            </div>

            <hr />

            {/* Footer links */}
            <div className="row">
                {footerItems.map((item) => (
                    <div className="col-3" key={item.id}>
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

            <div className="row footer-row justify-content-between pb-3">
                <span>Link</span>
                <span>Link</span>
                <span>Link</span>
                <span>Link</span>
                <span>&copy;2022</span>
            </div>

        </div>
    );
}
 
export default Footer;