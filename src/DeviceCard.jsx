import React, { useRef } from 'react';
import { Card, Container } from 'react-bootstrap';

let cardNum = 1;
function DeviceCard() {
    const number = cardNum++;
    return(
        <Container>
            <Card style={{ borderColor: '#eee', margin: '20px', padding: '5px' }}>
                <h4>Beacon { number }</h4>
                <h5><strong>ID:</strong> 421-532-413-450</h5>
                <p><strong>Distance:</strong> 4 meters away</p>
                <p><strong>Last pinged:</strong> 50 seconds ago</p>
            </Card>
        </Container>
    )
}

export default DeviceCard;