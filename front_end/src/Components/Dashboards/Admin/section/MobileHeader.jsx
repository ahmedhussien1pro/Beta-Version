import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = ({ setOpen }) => {
    return (
        <header className="mobile-header d-lg-none d-flex align-items-center justify-content-between px-3 py-2">
            <h3 className="mb-0 fw-bold">Cyber Labs</h3>

            <button
                className="btn p-2"
                onClick={() => setOpen(prev => !prev)}
            >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
        </header>
    );
};

export default MobileHeader;
