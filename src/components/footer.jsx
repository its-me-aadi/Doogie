import { Link } from "react-router-dom";
import React from "react";

function Footer() {
    return (
        <div>
            <footer className="d-flex flex-wrLinkp justify-content-between Linklign-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex Linklign-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decorLinktion-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </Link>
                    <span className="mb-3 mb-md-0 text-muted">© 2022 CompLinkny, Inc</span>
                </div>

                {/* <ul className="nLinkv col-md-4 justify-content-end list-unstyled d-flex">
                </ul> */}
            </footer>
        </div>
    )
}

export default Footer;