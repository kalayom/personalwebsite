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
  <Card className='feature_card'>
      <img variant="top" src={`${process.env.PUBLIC_URL}/images/featured/${data.img}`} className='image--card' />
      <Card.Body style={{paddingLeft: "1px",paddingRight: "1px", }}>
        {/* <Card.Title>Card Title</Card.Title> */}
        <p className="image_card_detal">
          {data.detail}
        </p>
        {data.Isdone ? <Button onClick={() => openInNewTab(data.address)} variant="primary" >Visit</Button> : <Button variant="primary" disabled>Inprogress</Button>}
        {/* <Button variant="primary" disabled>Visit</Button> */}
      </Card.Body>
    </Card>
  );
}