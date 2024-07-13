import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Image_card(data) {

  const openInNewTab = (url) => {
    if (typeof url === 'undefined') {
      return ;
    }
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

return (
    <Card style={{ width: '40rem', padding: '1rem', marginBottom: '5rem',marginRight: '3rem' }} >
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/featured/${data.img}`} className='image--card' />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          {data.detail}
        </Card.Text>
        {data.Isdone ? <Button onClick={() => openInNewTab(data.address)} variant="primary" >Visit</Button> : <Button variant="primary" disabled>Inprogress</Button>}
        {/* <Button variant="primary" disabled>Visit</Button> */}
      </Card.Body>
    </Card>
  );
}