import React, { useRef, useEffect } from 'react';
import './index'
import { storiesOf } from '@storybook/react';
import { start, mountApp } from '../src';
import { prefetch } from '../src/prefetch';

start();

prefetch([{id: 'os-example', manifest: 'https://g.alicdn.com/ConsoleOS/OSExample/0.0.2/os-example.manifest.json'}]);


storiesOf('Basic Console OS', module)
  .add('Basic Use', () => {
    const appRef = useRef();
    useEffect(() => {
      mountApp({ 
        id: 'os-example', 
        manifest: 'https://g.alicdn.com/ConsoleOS/OSExample/0.0.2/os-example.manifest.json',
        dom: appRef.current,
      });
    }, []);
    return (
      <div ref={appRef}/>
    )
  })