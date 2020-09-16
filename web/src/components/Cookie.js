import React from 'react'
import {useState} from "react"
import {Modal, Button, Accordion, Card} from "react-bootstrap";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
    const [show,
        setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="ACCEPT"
                cookieName="viewed_cookie_policy"
                style={{
                background: "#fff",
                color: "#000"
            }}
                buttonStyle={{
                color: "#fff",
                backgroundColor: "#DD4027",
                fontSize: "13px"
            }}
                expires={150}>
                This website uses cookies to improve your experience. We'll assume you're ok
                with this, but you can opt-out if you wish.
                <button onClick={handleShow}>Cookie Settings</button>
            </CookieConsent>
        <Modal show={show}>
            <Modal.Header closeButton>
                    <Modal.Title>Privacy Overview</Modal.Title>
            </Modal.Header>
                < Modal.Body style={{
                    fontSize: "10px"
                }}>
                    This website uses cookies to improve your experience while you navigate through
                    the website.Out of these cookies, the cookies that are categorized as necessary
                    are stored on your browser as they are essential for the working of basic
                    functionalities of the website.We also use third - party cookies that help us
                    analyze and understand how you use this website.These cookies will be stored in
                    your browser only with your consent.You also have the option to opt - out of
                    these cookies.But opting out of some of these cookies may have an effect on your
                    browsing experience. < Accordion defaultActiveKey = "0" >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Necessary
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body
                                style={{
                                fontSize: "10px"
                            }}>Necessary
                                cookies are absolutely essential for the website to function properly. This
                                category only includes cookies that ensures basic functionalities and security
                                features of the website. These cookies do not store any personal information.<br/></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    < Card >
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Non Necessary
                        </Accordion.Toggle>
                        < Accordion.Collapse eventKey="1">
                            <Card.Body
                                style={{
                                fontSize: "10px"
                            }}>Any
                                cookies that may not be particularly necessary for the website to function and
                                is used specifically to collect user personal data via analytics, ads, other
                                embedded contents are termed as non-necessary cookies. It is mandatory to
                                procure user consent prior to running these cookies on your website.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Decline
                </Button >
                <Button variant="primary" onClick={handleClose}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}
export default Cookie;