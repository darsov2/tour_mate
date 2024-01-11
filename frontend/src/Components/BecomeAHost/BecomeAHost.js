import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { HiMagnifyingGlass } from "react-icons/hi2"
import { AiOutlineInfoCircle } from "react-icons/ai"
import BecomeAHostOverlay from "./BecomeAHostOverlay";
import Review from "./Review";


function BecomeAHost() {
    return (
        <>
            <Container  className="rounded-5 my-5" style={{padding: "15% 35%", backgroundColor: "#57C5B6", marginTop: "10% !important"}}>
                <Container fluid="sm" className="rounded-5 mx-auto my-auto py-5" style={{backgroundColor: "#ffffff", zIndex: "999999"}}>
                    <h2>Регистрирај бизнис!</h2>
                    <p>
                        Зголеми ја заработката и отвори нови можности за својот бизнис
                    </p>
                    <Button type="button" style={{backgroundColor: "#159895"}} size="lg">
                        <span className="ikona my-1"><AiOutlineInfoCircle/></span>
                        <span className="ikona mx-3">Дознај повеќе</span>
                    </Button>
                </Container>
            </Container>
            <BecomeAHostOverlay>
            </BecomeAHostOverlay>
        </>
    );
}

export default BecomeAHost;