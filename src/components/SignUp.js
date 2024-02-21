import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Parol uyğun deyil")
    }else{
      console.log(true)
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/');
    } catch {
      setError("Akaunt uyğun deyil")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Qeydiyyat</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="my-3">
              <Form.Label>Parol</Form.Label>
              <Form.Control type="password" ref={passwordRef} required autocomplete="new-password" />
            </Form.Group>
            <Form.Group id="password-confirm" className="my-3">
              <Form.Label>Yenidən parol</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required autocomplete="new-password" />
            </Form.Group>
            <Button disabled={loading} className="w-100 my-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Artıq hesabınız var ? <Link to="/login">Login</Link>
      </div>
    </>
  )
}
