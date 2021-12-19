import { BrainCloudWrapper } from 'braincloud';
import electron from './electron';

type AppData = {
  id: string;
  name: string;
  secret: string;
  version: string;
};

const { sendSync } = electron.ipcRenderer;
const appData: AppData = sendSync('appData');
const { id, name, secret, version } = appData;
const wrapper = new BrainCloudWrapper(name);
wrapper.initialize(id, secret, version);
console.log('init');
export default wrapper;
