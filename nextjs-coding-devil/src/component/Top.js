import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div styles={{ display: 'flex', paddingTop: 20 }}>
      <div styles={{ flex: '100px 0 0' }}>
        <img src="/images/top.jpg" alt="log" style={{ display: 'block', width: 80 }} />
      </div>
      <Header as="h1">Aio</Header>
      <Gnb />
    </div>
  );
}
