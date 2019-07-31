export function objectIfPresent(parent, parentName, name) {
  const o = parent[name];
  const typeofO = typeof o;
  if (typeofO !== 'object') {
    if (typeofO === 'undefined') {
      throw new Error(`${name} missing from ${parentName}.`);
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
      throw new Error(`${name} is missing in ${parentName}.`);
    }
  } else if (typeofS !== 'string') {
    throw new Error(`${name} must be a string.`);
  }
  return s;
}