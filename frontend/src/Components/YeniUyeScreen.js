import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function YeniUyeScreen() {
    const navigate = useNavigate();
    const [ad, setAd] = useState('');
    const [tel, setTel] = useState('');
    const [aktif, setAktif] = useState(false);

     const submitHandler=async(event)=>{
        event.preventDefault();
        console.log(ad,tel,aktif);
        try {
            const { data } = await axios.post('/api/kisi/yeniUye', {
              ad,
              tel,
              aktif,
            });
            toast.success("Yeni üye başarıyla eklendi");
            setTimeout(()=>{
                navigate("/uyeler");
            },2000)
          
          } catch (err) {
          }
     }
    return (
        <Container>
          
          <h1 className="my-3">Yeni Üye</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Ad Soyad</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                onChange={(e) => setAd(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                type="text"
                name="tel"
                required
                onChange={(e) => setTel(e.target.value)}
              ></Form.Control>
            </Form.Group>
          
            <Form.Check
            className="mb-3"
            type="checkbox"
            id="aktif"
            label="Aktif"
            checked={aktif}
            onChange={(e) => setAktif(e.target.checked)}
          />
            <div className="mb-3">
          <Button variant="primary" type="submit">
          Onayla
          </Button>
        </div>
          </Form>
        </Container>
      );
}
