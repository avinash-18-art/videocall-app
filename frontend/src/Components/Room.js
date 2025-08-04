import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
  const { roomId } = useParams(); // Make sure your route includes roomId like /room/:roomId
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      try {
        if (!roomId) {
          console.error("Room ID is undefined!");
          return;
        }

        const appID = 950473569;
        const serverSecret = '771f9e40682df4752bb459ac13b613b2';
        const userID = String(Math.floor(Math.random() * 100000));
        const userName = 'Avinash_' + userID;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomId,
          userID,
          userName
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: element,
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton: true,
        });
      } catch (error) {
        console.error("Error initializing meeting:", error);
      }
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }
  }, [roomId]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Room ID: {roomId || "Loading..."}</h2>
      <div ref={containerRef} style={{ width: '100%', height: '90vh' }} />
    </div>
  );
}

export default Room;
