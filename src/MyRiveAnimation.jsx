import React from 'react';
import { useRive, Layout, Fit } from '@rive-app/react-webgl2';

function MyRiveAnimation() {
  const { RiveComponent } = useRive({
    src: "/petpikachu.riv",
    stateMachines: 'statemachine',
    autoplay: true,
    layoutScaleFactor: 1,
    layout: new Layout({
      fit: Fit.Contain, // Or Fit.Cover
    }),
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default MyRiveAnimation;