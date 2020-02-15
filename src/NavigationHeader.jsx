import React, { useState }  from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationHeader() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Track Beacon</Navbar.Brand>
        </Navbar>
    );
}

export default NavigationHeader;