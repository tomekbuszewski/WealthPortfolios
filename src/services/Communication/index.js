import axios from 'axios';

import { API_URL } from '@config';

class CommunicationService {
  constructor(params) {
    const {
      url,
      method = 'get',
      data = null,
    } = params;

    this.client = axios.create({
      baseURL: API_URL,
      method,
      url,
    });

    this.data = data;

    return this.assign(method);
  }

  assign(method) {
    if (method === 'get') {
      return this.get.bind(this);
    }

    return this.send.bind(this);
  }

  get() {
    return this.client.call(this);
  }

  send() {
    return this.client.call(this, {
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
      data: this.data,
    });
  }
}

export default CommunicationService;
