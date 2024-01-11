import { Container } from 'react-bootstrap';
import Review from "./Review";

function BecomeAHostOverlay() {
    return (
        <>
            <Container>
                <Container style={{position: 'relative', top: '-750px', left: "-550px", zIndex: '1'}}>
                    <Review/  >
                </Container>
                <Container style={{position: 'relative', top: '-600px', left: "650px", zIndex: '1'}}>
                    <Review/  >
                </Container>
                <Container style={{position: 'relative', top: '-1250px', left: "550px", zIndex: '1'}}>
                    <Review/  >
                </Container>
                <Container style={{position: 'relative', top: '-900px', left: "-200px", zIndex: '1'}}>
                    <Review/>
                </Container>
            </Container>
        </>
    );
}

export default BecomeAHostOverlay;