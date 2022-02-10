# About

This project requires a uses electron, react, and braincloud.

## Prerequisites

### Setup Braincloud

1. Create an application on [brainCloud](https://portal.braincloudservers.com/)
2. Create `appData.json` in the root directory

```json
{
  "id": "APP_ID_HERE",
  "name": "APP_NAME_HERE",
  "secret": "APP_SECRET_HERE",
  "version": "APP_VERSION_HERE",
  "api": "https://sharedprod.braincloudservers.com/dispatcherv2"
}
```

### Install Dependencies

```
npm install
```

## Development

```
npm run start
```

## Debug

1. Open VS Code
2. Open Debug Panel
3. Run 'All'
