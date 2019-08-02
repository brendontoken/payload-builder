export default [
  {
    "actionCode": "C1",
    "name": "ContractOffer",
    "label": "Contract Offer",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"C1\"\n  },\n  \"actionContents\": {\n    \"contractName\": \"Tesla - Shareholder Agreement\",\n    \"bodyOfAgreementType\": \"1\",\n    \"bodyOfAgreement\": \"NO EXAMPLE\",\n    \"contractType\": \"Shareholder Agreement\",\n    \"supportingDocs\": \"NO EXAMPLE\",\n    \"governingLaw\": \"USA\",\n    \"jurisdiction\": \"US-CA\",\n    \"contractExpiration\": \"Wed May 09 2018 00:00:00 GMT+1000 (AEST)\",\n    \"contractURI\": \"https://tokenized.com/Contract/3qeoSCg7JmfSnJesJFojj\",\n    \"issuer\": \"NO EXAMPLE\",\n    \"issuerLogoURL\": \"https://example.com/images/logo.png\",\n    \"contractOperatorIncluded\": true,\n    \"contractOperator\": \"NO EXAMPLE\",\n    \"contractAuthFlags\": \"NO EXAMPLE\",\n    \"contractFee\": \"8\",\n    \"votingSystems\": \"NO EXAMPLE\",\n    \"restrictedQtyAssets\": \"1\",\n    \"administrationProposal\": true,\n    \"holderProposal\": true,\n    \"oracles\": \"NO EXAMPLE\",\n    \"masterPKH\": \"0102030405060708090a1112131415161718191a0\"\n  }\n}"
  },
  {
    "actionCode": "C2",
    "name": "ContractFormation",
    "label": "Contract Formation",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"C2\"\n  },\n  \"actionContents\": {\n    \"contractName\": \"Tesla - Shareholder Agreement\",\n    \"bodyOfAgreementType\": \"1\",\n    \"bodyOfAgreement\": \"NO EXAMPLE\",\n    \"contractType\": \"Shareholder Agreement\",\n    \"supportingDocs\": \"NO EXAMPLE\",\n    \"governingLaw\": \"USA\",\n    \"jurisdiction\": \"US-CA\",\n    \"contractExpiration\": \"Wed May 09 2018 00:00:00 GMT+1000 (AEST)\",\n    \"contractURI\": \"https://tokenized.com/Contract/3qeoSCg7JmfSnJesJFojj\",\n    \"issuer\": \"NO EXAMPLE\",\n    \"issuerLogoURL\": \"https://example.tld/images/logo.png\",\n    \"contractOperatorIncluded\": true,\n    \"contractOperator\": \"NO EXAMPLE\",\n    \"contractAuthFlags\": \"NO EXAMPLE\",\n    \"contractFee\": \"8\",\n    \"votingSystems\": \"NO EXAMPLE\",\n    \"restrictedQtyAssets\": \"1\",\n    \"administrationProposal\": true,\n    \"holderProposal\": true,\n    \"oracles\": \"NO EXAMPLE\",\n    \"masterPKH\": \"0102030405060708090a1112131415161718191a0\",\n    \"contractRevision\": \"0\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "C3",
    "name": "ContractAmendment",
    "label": "Contract Amendment",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"C3\"\n  },\n  \"actionContents\": {\n    \"changeAdministrationAddress\": 1,\n    \"changeOperatorAddress\": 1,\n    \"contractRevision\": 42,\n    \"amendments\": \"NO EXAMPLE\",\n    \"refTxID\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\"\n  }\n}"
  },
  {
    "actionCode": "C4",
    "name": "StaticContract Formation",
    "label": "Static Contract Formation",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"C4\"\n  },\n  \"actionContents\": {\n    \"contractName\": \"Tesla - Shareholder Agreement\",\n    \"contractCode\": \"NO EXAMPLE\",\n    \"bodyOfAgreementType\": \"1\",\n    \"bodyOfAgreement\": \"NO EXAMPLE\",\n    \"contractType\": \"Non-Disclosure Agreement\",\n    \"supportingDocs\": \"NO EXAMPLE\",\n    \"contractRevision\": \"0\",\n    \"governingLaw\": \"USA\",\n    \"jurisdiction\": \"US-CA\",\n    \"effectiveDate\": \"04 Dec 2019 00:12:00 GMT\",\n    \"contractExpiration\": \"04 Dec 2019 00:12:00 GMT\",\n    \"contractURI\": \"https://tokenized.com/Contract/3qeoSCg7JmfSnJesJFojj\",\n    \"prevRevTxID\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"entities\": \"NO EXAMPLE\"\n  }\n}"
  },
  {
    "actionCode": "C5",
    "name": "ContractAddressChange",
    "label": "Contract Address Change",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"C5\"\n  },\n  \"actionContents\": {\n    \"newContractPKH\": \"0102030405060708090a1112131415161718191a0\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "A1",
    "name": "AssetDefinition",
    "label": "Asset Definition",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"A1\"\n  },\n  \"actionContents\": {\n    \"assetAuthFlags\": \"NO EXAMPLE\",\n    \"transfersPermitted\": 1,\n    \"tradeRestrictions\": \"GBR\",\n    \"enforcementOrdersPermitted\": 1,\n    \"votingRights\": true,\n    \"voteMultiplier\": \"3\",\n    \"administrationProposal\": true,\n    \"holderProposal\": true,\n    \"assetModificationGovernance\": \"1\",\n    \"tokenQty\": \"1000000\",\n    \"assetPayload\": \"NO EXAMPLE\"\n  }\n}"
  },
  {
    "actionCode": "A2",
    "name": "AssetCreation",
    "label": "Asset Creation",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"A2\"\n  },\n  \"actionContents\": {\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"assetIndex\": \"8\",\n    \"assetAuthFlags\": \"NO EXAMPLE\",\n    \"transfersPermitted\": 1,\n    \"tradeRestrictions\": \"GBR\",\n    \"enforcementOrdersPermitted\": 1,\n    \"votingRights\": true,\n    \"voteMultiplier\": \"3\",\n    \"administrationProposal\": true,\n    \"holderProposal\": true,\n    \"assetModificationGovernance\": \"1\",\n    \"tokenQty\": \"1000000\",\n    \"assetPayload\": \"NO EXAMPLE\",\n    \"assetRevision\": \"4\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "A3",
    "name": "AssetModification",
    "label": "Asset Modification",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"A3\"\n  },\n  \"actionContents\": {\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"assetRevision\": \"0\",\n    \"amendments\": \"NO EXAMPLE\",\n    \"refTxID\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\"\n  }\n}"
  },
  {
    "actionCode": "T1",
    "name": "Transfer",
    "label": "Transfer",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"T1\"\n  },\n  \"actionContents\": {\n    \"assets\": \"NO EXAMPLE\",\n    \"offerExpiry\": \"04 Dec 2019 00:12:00 GMT\",\n    \"exchangeFee\": \"0.01\",\n    \"exchangeFeeAddress\": \"0102030405060708090a1112131415161718191a0\"\n  }\n}"
  },
  {
    "actionCode": "T2",
    "name": "Settlement",
    "label": "Settlement",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"T2\"\n  },\n  \"actionContents\": {\n    \"assets\": \"NO EXAMPLE\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "G1",
    "name": "Proposal",
    "label": "Proposal",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"G1\"\n  },\n  \"actionContents\": {\n    \"initiator\": \"1\",\n    \"assetSpecificVote\": true,\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"voteSystem\": \"1\",\n    \"specific\": true,\n    \"proposedAmendments\": \"NO EXAMPLE\",\n    \"voteOptions\": \"ABCDEFGHIJKLMNO\",\n    \"voteMax\": \"15\",\n    \"proposalDescription\": \"Change the name of the Contract.\",\n    \"proposalDocumentHash\": \"77201b0094f50df309f0343e4f44dae64d0de503c91038faf2c6b039f9f18aec\",\n    \"voteCutOffTimestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "G2",
    "name": "Vote",
    "label": "Vote",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"G2\"\n  },\n  \"actionContents\": {\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "G3",
    "name": "BallotCast",
    "label": "Ballot Cast",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"G3\"\n  },\n  \"actionContents\": {\n    \"voteTxId\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"vote\": \"A\"\n  }\n}"
  },
  {
    "actionCode": "G4",
    "name": "BallotCounted",
    "label": "Ballot Counted",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"G4\"\n  },\n  \"actionContents\": {\n    \"voteTxId\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"vote\": \"A\",\n    \"quantity\": \"8\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "G5",
    "name": "Result",
    "label": "Result",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"G5\"\n  },\n  \"actionContents\": {\n    \"assetSpecificVote\": true,\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"specific\": true,\n    \"proposedAmendments\": \"NO EXAMPLE\",\n    \"voteTxId\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"optionTally\": \"NO EXAMPLE\",\n    \"result\": \"NO EXAMPLE\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "E1",
    "name": "Order",
    "label": "Order",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"E1\"\n  },\n  \"actionContents\": {\n    \"complianceAction\": \"F\",\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"targetAddresses\": \"NO EXAMPLE\",\n    \"freezeTxId\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"freezePeriod\": \"Tue Oct 09 2018 05:00:00 GMT+1000 (AEST)\",\n    \"depositAddress\": \"0102030405060708090a1112131415161718191a0\",\n    \"authorityIncluded\": true,\n    \"authorityName\": \"Supreme and District Courts Brisbane\",\n    \"authorityPublicKey\": \"NO EXAMPLE\",\n    \"signatureAlgorithm\": 1,\n    \"orderSignature\": \"NO EXAMPLE\",\n    \"supportingEvidenceHash\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"refTxs\": \"NO EXAMPLE\",\n    \"bitcoinDispersions\": \"NO EXAMPLE\",\n    \"message\": \"Compelled by a court order.\"\n  }\n}"
  },
  {
    "actionCode": "E2",
    "name": "Freeze",
    "label": "Freeze",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"E2\"\n  },\n  \"actionContents\": {\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"quantities\": \"NO EXAMPLE\",\n    \"freezePeriod\": \"04 Dec 2019 00:12:00 GMT\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "E3",
    "name": "Thaw",
    "label": "Thaw",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"E3\"\n  },\n  \"actionContents\": {\n    \"freezeTxId\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "E4",
    "name": "Confiscation",
    "label": "Confiscation",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"E4\"\n  },\n  \"actionContents\": {\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"quantities\": \"NO EXAMPLE\",\n    \"depositQty\": \"10000\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "E5",
    "name": "Reconciliation",
    "label": "Reconciliation",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"E5\"\n  },\n  \"actionContents\": {\n    \"assetType\": \"SHC\",\n    \"assetCode\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"quantities\": \"NO EXAMPLE\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  },
  {
    "actionCode": "R1",
    "name": "Establishment",
    "label": "Establishment",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"R1\"\n  },\n  \"actionContents\": {\n    \"message\": \"North America Whitelist\"\n  }\n}"
  },
  {
    "actionCode": "R2",
    "name": "Addition",
    "label": "Addition",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"R2\"\n  },\n  \"actionContents\": {\n    \"message\": \"username\"\n  }\n}"
  },
  {
    "actionCode": "R3",
    "name": "Alteration",
    "label": "Alteration",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"R3\"\n  },\n  \"actionContents\": {\n    \"entryTxID\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"message\": \"Changed Country of Residence\"\n  }\n}"
  },
  {
    "actionCode": "R4",
    "name": "Removal",
    "label": "Removal",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"R4\"\n  },\n  \"actionContents\": {\n    \"entryTxID\": \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\",\n    \"message\": \"Removed due to violation of company policy.\"\n  }\n}"
  },
  {
    "actionCode": "M1",
    "name": "Message",
    "label": "Message",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"M1\"\n  },\n  \"actionContents\": {\n    \"addressIndexes\": [\n      \"1\",\n      \"2\"\n    ],\n    \"messagePayload\": \"Hello world!\"\n  }\n}"
  },
  {
    "actionCode": "M2",
    "name": "Rejection",
    "label": "Rejection",
    "json": "{\n  \"header\": {\n    \"version\": 1,\n    \"actionCode\": \"M2\"\n  },\n  \"actionContents\": {\n    \"addressIndexes\": [\n      \"1\",\n      \"2\"\n    ],\n    \"rejectAddressIndex\": \"2\",\n    \"rejectionCode\": \"1\",\n    \"message\": \"Sorry, you don't have enough tokens.\",\n    \"timestamp\": \"04 Dec 2019 00:12:00 GMT\"\n  }\n}"
  }
];