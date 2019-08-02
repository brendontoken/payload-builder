import BN from 'bn.js';
import { Timestamp, TxId } from 'tokenized';

const txIdRegex = /[0-9a-fA-F]{64}/;
const uint8Max = Math.pow(2, 8) - 1;
const uint64MaxBn = new BN('ffffffffffffffff', 16);

export function bigNumberIfPresent(parent, parentName, name) {
  const n = stringIfPresent(parent, parentName, name);
  let bn;
  try {
    bn = new BN(n, 10);
  } catch (e) {
    console.error(`Failed to convert ${n} to a big number.`, e);
    throw new Error(`${name} must be a valid big integer.`);
  }
  return bn;
}

export function bigNumberUint64IfPresent(parent, parentName, name) {
  const n = bigNumberIfPresent(parent, parentName, name);
  if (n.cmp(0) < 0) { throw new Error(`${name} must be positive.`); }
  if (n.cmp(uint64MaxBn) > 0) {throw new Error(`${name} must be less than or equal to ${uint64MaxBn.toString()}.`); }
  return n;
}

export function numberIfPresent(parent, parentName, name) {
  const n = parent[name];
  const typeofN = typeof n;
  switch (typeofN) {
    case 'number':
      return n;
    case 'undefined':
      throw new Error(`"${name}" is missing from ${parentName}.`);
    default:
      throw new Error(`"${name}" must be a number.`);
  }
}

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

export function uint8ByteIfPresent(parent, parentName, name) {
  // Because an 8-byte uint is too big to be correctly represented in JavaScript.
  const n = stringIfPresent(parent, parentName, name);
  if (n < 0) { throw new Error(`${name} must be positive`); }
  if (n > uint8Max) { throw new Error(`${name} must be ${uint8Max} or less.`); }
  return n;
}

export function varcharIfPresent(parent, parentName, name, maxLength) {
  const s = stringIfPresent(parent, parentName, name);
  const buf = Buffer.from(s, 'utf8');
  if (buf.length > maxLength) { throw new Error(`Byte representation of ${name} exceeds maximum length of ${maxLength}.`); }
  return buf;
}