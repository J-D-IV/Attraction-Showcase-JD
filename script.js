import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 1000 },
    { duration: '10s', target: 1500 },
    { duration: '10s', target: 2000 },
    { duration: '10s', target: 2000 },
    { duration: '10s', target: 1500 },
    { duration: '10s', target: 1000 },
  ],
  // scenarios: {
  //   constant_request_rate: {
  //     executor: 'constant-arrival-rate',
  //     rate: 1000,
  //     timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
  //     duration: '30s',
  //     preAllocatedVUs: 1500, // how large the initial pool of VUs would be
  //     maxVUs: 1500, // if the preAllocatedVUs are not enough, we can initialize more
  //   },
  // },
};

export default function () {
  http.get(`http://localhost:3001/api/showcase/${Math.floor(Math.random() * 10000001)}`);
  sleep(1);
}

// docker run \
//   -d --restart unless-stopped \
//   --name newrelic-statsd \
//   -h $(hostname) \
//   -e NR_ACCOUNT_ID=3047888 \
//   -e NR_API_KEY="NRAK-X1K5USYCOJBOB6Y8BWCFMX7H2B9" \
//   -p 8125:8125/udp \
//   newrelic/nri-statsd:latest
