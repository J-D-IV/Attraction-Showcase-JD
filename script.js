import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '10s', target: 200 },
    { duration: '40s', target: 300 },
  ],
};

export default function () {
  http.get('http://3.134.108.121:3001/api/showcase/10');
  sleep(1);
}
// ${Math.floor(Math.random() * 10000001)}
