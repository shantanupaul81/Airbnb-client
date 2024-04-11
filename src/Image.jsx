export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://airbnb-server-bgq5.onrender.com/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }