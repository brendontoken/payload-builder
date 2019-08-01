import { Timestamp, TxId } from 'tokenized';

const txIdRegex = /[0-9a-fA-F]{64}/;

export function objectIfPresent(parent, parentName, name) {
  const o = parent[name];
  const typeofO = typeof o;
  if (typeofO !== 'object') {
    if (typeofO === 'undefined') {
      throw new Error(`"${name}" is missing from ${parentName}.`);
    } else {
      throw new Error(`${name} must be an object.`);
    }
  }

  return o;
}

export function stringIfPresent(parent, parentName, name) {
  const s = parent[name];
  const typeofS = typeof s;
  if (!s) {
    if (typeofS === 'string') {
      throw new Error(`${name} must not be empty.`);
    } else {
      throw new Error(`"${name}" is missing in ${parentName}.`);
    }
  } else if (typeofS !== 'string') {
    throw new Error(`${name} must be a string.`);
  }
  return s;
}

export function timestampIfPresent(parent, parentName, name) {
  const timestampText = parent[name];
  if (!timestampText) { throw new Error(`"${name}" is missing in ${parentName}.`); }
  const milliseconds = Date.parse(timestampText);
  if (!milliseconds) { throw new Error('Failed to parse the timestamp. Try something like "04 Dec 1995 00:12:00 GMT".'); }
  console.log('milliseconds:   ', milliseconds);
  if (milliseconds < 0) { throw new Error(`${name} is too early.`); }
  if (milliseconds > Number.MAX_SAFE_INTEGER) { throw new Error(`${name} is too late.`); };
  const timestamp = Timestamp.NewTimestamp(milliseconds);
  return timestamp;
}

export function txIdIfPresent(parent, parentName, name) {
  const txIdText = stringIfPresent(parent, parentName, name);
  if (!txIdRegex.test(txIdText)) { throw new Error(`${name} must be 64 hex characters.`); }

  const txId = new TxId();
  txId.UnmarshalJSON(txIdText);
  return txId;
}

export function varcharIfPresent(parent, parentName, name, bitCount) {
  const s = stringIfPresent(parent, parentName, name);
  const buf = Buffer.from(s, 'utf8');
  const maxLength = Math.pow(2, bitCount) - 1;
  if (buf.length > maxLength) { throw new Error(`Byte representation of ${name} exceeds maximum length of ${maxLength}.`); }
  return buf;
}