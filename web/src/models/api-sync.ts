import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class apiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    console.log(`${this.rootUrl}/${id}`);
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
