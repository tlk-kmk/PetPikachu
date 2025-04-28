import React from 'react';
import { useRive, Layout, Fit } from '@rive-app/react-webgl2';

function MyRiveAnimation() {
  const aspectRatio = 16 / 9; // Example: 16:9 aspect ratio (adjust as needed)

  const { RiveComponent } = useRive({
    src: "/petpikachu.riv",
    stateMachines: 'statemachine',
    artboard: 'frame',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain, // Or Fit.Cover, experiment to see what looks best
    }),
  });

  return (
    <div style={{ width: '100%', aspectRatio: aspectRatio }}>
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default MyRiveAnimation;