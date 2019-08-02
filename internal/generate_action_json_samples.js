const fs = require('fs');

console.log('Hello.');

// Property names come accessed by type definitions, so must be PascalCase.
const generalFieldExamples = {
  bin: {
    '32': '0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20'
  },
  'bool': true,
  AssetCode: '0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20',
  PublicKeyHash: '0102030405060708090a1112131415161718191a0',
  Timestamp: '04 Dec 2019 00:12:00 GMT',
  TxId: '0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20',
  uint: {
    '1': '1',
    '2': '2',
    '4': '4',
    '8': '8'
  },
  'uint16[]': ['1', '2']
};

generateJson();

function generateJson() {
  const buf = fs.readFileSync('../specification/dist/json/protocol.json');
  const str = buf.toString('utf8');
  //console.log('file contents:', str);
  const parsed = JSON.parse(str);

  const fieldAliases = parsed.fieldAliases;
  const fieldTypes = parsed.fieldTypes;
  const fieldTypesDict = {};
  fieldTypes.forEach(function onField(field) {
    fieldTypesDict[field.metadata.name] = field;
  });
  console.log('fieldTypesDict.keys', Object.keys(fieldTypesDict));
  console.log('fieldTypesDict', fieldTypesDict);

  const headerFields = parsed.headerFields;

  const actions = parsed.messages;
  console.log('action count:', actions.length);

  const samples = actions.map(function onMap(action) {
    console.log('action name:', action.metadata.name);
    
    const metadata = action.metadata;
    const sample = {
      actionCode: action.id,
      name: metadata.name,
      label: metadata.label,
    };

    const jsonObject = {
      header: {
        version: 1,           // Just assuming this for now, it is not contained in the specification of the actions.
        actionCode: action.id // Need field actionCode to link to id, or just change the id field to actionCode?
      },
      actionContents: {}
    };

    action.fields.forEach(function onField(field) {
      console.log('field:', field);
      let fieldExample = field.example; // May be undefined
      const fieldType = field.type;
      const fieldSize = field.size;
      if (typeof fieldExample === 'undefined') {
        if (typeof fieldSize === 'undefined') {
          fieldExample = generalFieldExamples[fieldType];
        } else {
          const examplesForSize = generalFieldExamples[fieldType];
          if (examplesForSize) {
            fieldExample = examplesForSize[fieldSize];
          }
        }
      }
      const fieldInfo = fieldTypesDict[fieldType];
      const camelCaseFieldName = camelCase(field.name);

      if (typeof fieldExample === 'undefined') {
        console.log(`NO EXAMPLE for field with type "${fieldType}":`, field);

      }

      jsonObject.actionContents[camelCaseFieldName] = fieldExample || 'NO EXAMPLE';
    });
    
    sample.json = JSON.stringify(jsonObject, null, 2); // stringify at this point at a later date

    return sample;
  });

  console.log('samples:', samples);

  const filename = '../src/tokens/actions/samples.js';
  const stringified = JSON.stringify(samples, null, 2);
  const fileContents = `export default ${stringified};`;
  fs.writeFileSync(filename, fileContents);
  console.log(`${filename} written.`);
}

function camelCase(pascalCase) {
  const first = pascalCase.slice(0, 1).toLowerCase();
  const remainder = pascalCase.slice(1);
  const s = `${first}${remainder}`;
  return s
}