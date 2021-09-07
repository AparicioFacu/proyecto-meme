import { Button, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { useState } from 'react';
import { guardarLocalStorage } from '../utils/localStorage';

const Admin = ({ memes, setMemes }) => {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ titulo: '', imagen: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        const form = event.currentTarget;
        // lo que deberia ejecutarse cuando todos los campos sean validos
        if (form.checkValidity() === true) {
            //...memes tiene el contenido de todos los objetos y input es el nuevo objeto
            const nuevoArray = [...memes, input];
            setMemes(nuevoArray);
            guardarLocalStorage({ key: 'memes', value: nuevoArray });
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        // const value = event.target.value;
        // const name = event.target.name;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    return (
        <>
            <Form
                className="card mt-5 p-5 mx-auto"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                style={{ width: '500px' }}
            >
                <Row className="mb-3">
                    <Form.Group controlId="titulo">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            name="titulo"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            placeholder="Meme"
                        />
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="imagen">
                        <Form.Label>Imagen</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                name="imagen"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                placeholder="http://meme.jpg"
                                aria-describedby="inputGroupPrepend"
                            />
                            <Form.Control.Feedback type="invalid">
                                Image is required!
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Agregar Meme</Button>
            </Form>

            <Table
                className="mt-5 mx-auto"
                style={{ width: '600px' }}
                striped
                bordered
            >
                <tbody>
                    {memes.map(({ titulo, imagen }, i) => (
                        <tr key={i}>
                            <td>
                                <img
                                    src={imagen}
                                    style={{ width: '5rem' }}
                                    alt=""
                                />
                            </td>
                            <td>{titulo}</td>
                        </tr>
                    ))}
                    {memes.length === 0 && 'No hay memes guardados'}
                </tbody>
            </Table>
        </>
    );
};

export default Admin;
