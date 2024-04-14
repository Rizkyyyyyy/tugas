import { useState } from "react";

function Card({ src, nama, des, des2, videoSrc }) {
    const [isImageVisible, setImageVisible] = useState(true);

    function toggleImageVisibility() {
        setImageVisible(!isImageVisible);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                gap: '20px',
                width: '400px',
                padding: '50px',
                borderRadius: '50px',

            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '60%',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                    }}
                >
                    {isImageVisible && (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    )}
                </div>

                <div>
                    <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{nama}</p>
                    <p>{des}</p>
                    <p style={{ fontStyle: 'italic' }}>{des2}</p>
                </div>
            </div>
            <h2 style={{ marginBottom: '20px' }}>My Courses</h2>
            <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px', width: '400px' }}>
                    HTML Foundation
                   <div> Learn HTML fundamental for building website</div> 
                    <video width="350" controls>
                        <source src={videoSrc} type="video.mp4" />
                    </video>
                </div>
                <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px', width: '400px' }}>
                    CSS Foundation
                    <div>Learn CSS fundamental for design website </div>
                    <video width="350" controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Card;