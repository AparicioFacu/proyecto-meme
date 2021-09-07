import { Card } from 'react-bootstrap';
import './meme.css';

const Meme = ({ meme }) => {
    const { imagen, titulo } = meme;

    return (
        <Card className="card-meme">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                {/* <span>{publishedAt}</span>                 */}
            </Card.Body>
        </Card>
    );
};

export default Meme;
