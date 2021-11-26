import Read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await Read();
      const data = await json(response);
      return data;
    } catch (err) {
      return err;
    }
  }
}
