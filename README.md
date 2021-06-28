# Delta

## Download

Clone the repository into your local machine.

## Installation

Open a terminal into the repository.

```bash
npm install
```

## Setup

### Local

- Create a firebase project from your Firebase console.
- Copy the configurations for the project.
- Replace the content of the `api/utils/firebase.config.json` with your config parameters.

### Firebase

- Enable Firestore in your project.
- Create a collection: `qrdata`.
- Add a record to `qrdata` collection:

  ```json
  {
      "url": "<video url here>"
  }
  ```

### Code

- Generate a QR code with 'employee-id' and id of record in `qrdata` collection, separated by a single space.

```js
employee211 some-random-qrdata-record-id
```

## Run

In the terminal, run

```bash
npm run vercel
```

Once the server is ready, open `http://localhost:3000` in your mobile device (preferred).
