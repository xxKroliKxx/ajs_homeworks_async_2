import Read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await Read();
      const data = await json(response);
      const obj = JSON.parse(data);
      return new GameSaving(obj);
    } catch (err) {
      return err;
    }
  }
}
