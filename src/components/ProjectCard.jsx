import React from 'react'
import Card from 'react-bootstrap/Card';
import media_player_img from '../assets/video-player.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '100%' }} onClick={handleShow}>
                <Card.Img variant="top" src={media_player_img} />
                <Card.Body>
                    <Card.Title>Media Player</Card.Title>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={media_player_img} alt="" width='100%' />
                        </Col>
                        <Col md={6}>
                            <h4>Description:</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati sint nisi recusandae reprehenderit labore repellat, sed itaque consequatur est?</p>
                            <h4>Technologies</h4>
                            <p>Languages:React, JavaScript, HTML, CSS </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <div className='d-flex mt-3 ms-3 mb-4'>
                    <Link className='ms-5 me-3'>
                        <i class="fa-brands fa-github fa-2x text-dark"></i>
                    </Link>
                    <Link className=''>
                        <i class="fa-solid fa-link fa-2x text-dark"></i>
                    </Link>
                </div>
            </Modal>
        </>
    )
}

export default ProjectCard