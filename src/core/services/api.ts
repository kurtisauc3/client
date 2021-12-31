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
const { brainCloudClient } = new BrainCloudWrapper(name);
brainCloudClient.initialize(id, secret, version);
export default brainCloudClient;
